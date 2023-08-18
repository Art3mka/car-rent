import React from 'react'
import '../../styles/our-members.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import ava1 from '../../assets/images/ava-1.jpg'
import ava2 from '../../assets/images/ava-2.jpg'
import ava3 from '../../assets/images/ava-3.jpg'
import ava4 from '../../assets/images/ava-4.jpg'


const MEMBERS = [
    {
        name: 'Artem Shein',
        experience: '100 year experinece',
        tgUrl: 'https://t.me/rtq_shein',
        instUrl: 'https://instagram.com/artmshpn?igshid=MzRlODBiNWFlZA==',
        img: ava3,
    },
    {
        name: 'Maxim Skepko',
        experience: '100 year experinece',
        tgUrl: 'https://t.me/stoyachiy28',
        instUrl: 'https://instagram.com/masik_skepa?igshid=MzRlODBiNWFlZA==',
        img: ava4,
    },
    {
        name: 'Vlad Oskerko',
        experience: '100 year experinece',
        tgUrl: 'https://t.me/VladOskerko',
        instUrl: 'https://instagram.com/vlad0skerko?igshid=MzRlODBiNWFlZA==',
        img: ava1,
    },
    {
        name: 'Artem L',
        experience: '100 year experinece',
        tgUrl: 'https://t.me/lazuuka',
        instUrl: 'https://instagram.com/lazuta.artem?igshid=MzRlODBiNWFlZA==',
        img: ava2,
    },
];

const OurMembers = () => {
    return <>
        {
            MEMBERS.map((item, index) => (
                <Col lg='3' md='3' sm='4' xs='6' key={index} className='mb-4'>
                    <div className="single__member">
                        <div className="single__member-img">
                            <img src={item.img} alt="" className='w-100'/>

                            <div className="single__member-social">
                                <Link target="_blank" to={item.tgUrl}><i className="ri-telegram-line"></i></Link>
                                <Link target="_blank" to={item.instUrl}><i className="ri-instagram-line"></i></Link>
                            </div>
                        </div>
                        <h6 className='text-center mb-0 mt-3'>{item.name}</h6>
                        <p className="section__descriptiom text-center">{item.experience}</p>
                    </div>
                </Col>
            ))
        }
    </>
}

export default OurMembers