import React from 'react'
import douban from '@/assets/imgs/home/douban.svg'

function HomeHeader() {
    return (
        <div className='home-header'>
            <img className='douban-logo' src={douban} alt='' />
            <div className='home-saying'>
                <dl>
                    <dt>那些电影中的经典台词</dt>
                    <dd>
                        <ul>
                            <li>
                                <span>[ 大佛普拉斯 ]</span>
                                <p>我想虽然现在是太空时代，人们早就可以坐太空船去月球，但永远无法探索别人内心的宇宙。</p>
                            </li>
                            <li>
                                <span>[ 三块广告牌 ]</span>
                                <p>仇恨解决不了问题，但冷静可以，思考可以，试试吧。</p>
                            </li>
                            <li>
                                <span>[ 小偷家族 ]</span>
                                <p>子女是没法选择父母的，所以自己选择的羁绊更牢靠吧。</p>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </div>
        </div>
    )
}

export default HomeHeader