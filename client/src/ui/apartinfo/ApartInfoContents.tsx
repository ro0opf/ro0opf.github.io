// src/ui/appartinfo/ApartInfoContents.tsx
import React, { useEffect, useState } from 'react'
import Wrapper from './ApartInfoContents.css'
import theme from '../../styles/theme'
import ApartRankList from '../ApartRankList'
import ApartRankInfo from './ApartRankInfo'
import ApartInfo from '../../data/ApartInfo'
import ShareSNS from './ShareSNS'
import DiamondUrl from '../../image/icon/ic_diamond.svg'
import GoldUrl from '../../image/icon/ic_gold.svg'
import SilverUrl from '../../image/icon/ic_silver.svg'
import BronzeUrl from '../../image/icon/ic_bronze.svg'
import GrassUrl from '../../image/icon/ic_grass.svg'
import {
  fetchSharpRiseRank,
  gExclusive,
  pSearchLog,
  gIP,
  gExclusiveWithoutSN,
  gApartInfo,
  gApartInfoWithoutSN,
} from './ApartInfoAPI'
import { Apart } from '../../data/Apart'

interface iProps {
  serial_num: string
  pr_cd: string
  ct_cd: string
  dong_cd: string
  addr_cd: string
}

interface AreaList {
  exclusive_area: number[]
}

function getRankImage(tier: string): string {
  switch (tier) {
    case 'DIA':
      return DiamondUrl
    case 'GOLD':
      return GoldUrl
    case 'SILVER':
      return SilverUrl
    case 'BRONZE':
      return BronzeUrl
    case 'GRASS':
      return GrassUrl
    default:
      break
  }

  return GrassUrl
}

function parsePrice(price: string | undefined) {
  if (price == undefined) {
    return ''
  }

  let fPrice = parseFloat(price)
  return (fPrice / 10000).toString() + '억'
}

function ApartInfoContents(props: iProps) {
  const [areaList, setAreaList] = useState<AreaList>({ exclusive_area: [] })
  const [apartInfo, setApartInfo] = useState<ApartInfo>()
  const [apartArea, setApartArea] = useState<string>()
  const [apartRank, setApartRank] = useState<Apart[]>([])
  let serial_num = props.serial_num
  let pr_cd = props.pr_cd
  let ct_cd = props.ct_cd
  let dong_cd = props.dong_cd
  let addr_cd = props.addr_cd

  useEffect(() => {
    async function fetchApartRank() {
      let pApartRank = await fetchSharpRiseRank()
      setApartRank(pApartRank)
    }

    async function fetchAreaList() {
      let pAreaList: AreaList = { exclusive_area: [] }

      if (serial_num != undefined && serial_num != '0') {
        pAreaList = await gExclusive(serial_num)
      } else {
        pAreaList = await gExclusiveWithoutSN(pr_cd, ct_cd, dong_cd, addr_cd)
      }

      setAreaList(pAreaList)
      setApartArea(pAreaList.exclusive_area[0].toString())
    }

    fetchApartRank()
    fetchAreaList()
    return () => {}
  }, [serial_num, pr_cd, ct_cd, dong_cd, addr_cd])

  useEffect(() => {
    async function fetchData() {
      if (apartArea == undefined) {
        return
      }

      let pApartInfo

      if (serial_num != undefined && serial_num != '0') {
        pApartInfo = await gApartInfo(serial_num, apartArea)
      } else {
        pApartInfo = await gApartInfoWithoutSN(pr_cd, ct_cd, dong_cd, addr_cd, apartArea)
      }
      setApartInfo(pApartInfo)
    }

    async function fetchSearchLog() {
      if (apartArea == undefined) {
        return
      }

      let response = await gIP()
      await pSearchLog(response.ip, serial_num, pr_cd, ct_cd, dong_cd, addr_cd, apartArea)
    }

    fetchData()
    fetchSearchLog()
    return () => {}
  }, [apartArea])

  return (
    <Wrapper>
      <div className="ApartName">
        <div className="Name">{apartInfo?.my_apt_dtl.apt_name}</div>
        <div className="SelectSize">
          <select
            className="Area"
            value={apartArea}
            onChange={(e) => {
              setApartArea(e.target.value)
            }}
          >
            {areaList.exclusive_area.map((value, index) => {
              return (
                <option value={value.toString()} key={index}>
                  {value + 'm2'}
                </option>
              )
            })}
          </select>
        </div>
      </div>

      <div className="RankAndPrice">
        <img src={apartInfo == null ? '' : getRankImage(apartInfo.wide_my_tier)} />
        <div className="Price">
          <span className="Title">최근 실거래 기준 6개월 평균</span>
          <span className="Price">{parsePrice(apartInfo?.my_apt_dtl.max_trans_price)}</span>
        </div>
      </div>

      <div className="AllAndArea">
        <ApartRankInfo apartInfo={apartInfo} rankColor={theme.color.gradation1} type="전국" />
        <ApartRankInfo apartInfo={apartInfo} rankColor={theme.color.gray2} type="지역별" />
      </div>

      <div className="ApartVolumeRank SubTitle">
        <div>급상승 순위</div>
      </div>

      <ApartRankList
        apartList={apartRank}
        circleBackground="linear-gradient(180deg, #E83232 0%, #C51C1C 100%)"
        type={0}
      />
      <ShareSNS apartInfo={apartInfo} />
    </Wrapper>
  )
}

export default ApartInfoContents
