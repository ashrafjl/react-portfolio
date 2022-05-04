import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesemoji from '../../img/glassesimoji.png'
import FloatingItem from '../FloatingItem/FloatingItem'
import { motion } from 'framer-motion'

const Intro = ()=>{
    const transition = {duration: 2, type: 'spring'}
    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! I Am</span>
                    <span>Andrew Thomas</span>
                    <span>Frontend Developer with high level of experience in web designing and development, producting the quality work.</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img 
                initial={{left: '-36%'}}
                whileInView={{left: '-24%'}}
                transition={transition}
                src={glassesemoji} alt="" />
                <motion.div
                initial={{top: '-4%', left: '74%'}}
                whileInView={{left: '68%'}}
                transition={transition} style={{top:'-4%', left: '68%'}}
                className={'floatingDiv'}
                >
                    <FloatingItem image={crown} txt1={'Web'} txt2={'Developer'}/>
                </motion.div>
                <motion.div
                initial={{left: '9rem', top: '18rem'}}
                whileInView={{left: '0rem'}}
                transition={transition}
                className={'floatingDiv'}
                 style={{top:'18rem', left: '0rem'}}>
                    <FloatingItem image={thumbup} txt1={'Best Design'} txt2={'Award'}/>
                </motion.div>
                <div className="blur" style={{background: 'rgb(238 210 255)'}}>
                <div className="blur" style={{background: '#c1f5ff',top: '17rem',width: '21rem',height: '11rem',left: '-25rem'}}></div>
                </div>
            </div>
        </div>
    )
}
export default Intro;