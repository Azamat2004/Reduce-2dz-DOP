import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (


        <div className="container">
            <div className="col"> <div className="image"><Link to="/thirdpost"><img src="./img/1.jpg" alt="" /></Link> </div>
                <div className="name">

                    <h1><Link className='perehod' to="/thirdpost" >Продаетс смешная собака</Link></h1>
                    <b className="price">$25</b>

                </div>
                <h6>25 Reviews</h6>
                <div className="opis-name">
                    <p className="opis">Celebrate succes right,the only way,apple.To <br /> succed you must beleive.When you belirve,<br />you will succed.</p>
                    </div>
                <div className="grafic">
                    <div className="year"><h3>2 year</h3>
                    <p className="course">Course</p>
                    </div>
                    <div className="class-size">
                        <h3>15</h3>

                        <p className="size">Class-size</p>
                        </div>
                    <div className="rabota">
                        <h3>8:00-13:00</h3>
                        <p className="duration">Class Duration</p>
                    </div>

                </div>
            </div>


            
            <div className="col">
                <div className="image"><Link to="/thirdpost"><img src="./img/5.webp" alt="" /></Link></div> <div className="name">
                <h1><Link className='perehod' to="/thirdpost" >Отдам в хорошие руки!!!</Link></h1>
                    <b className="price">$100</b>
                    <br />
                </div><h6>25 Reviews</h6>
                <div className="opis-name"><p className="opis">Celebrate succes right,the only way,apple.To <br /> succed you must beleive.When you belirve, <br />you will succed.</p></div>
                <div className="grafic"><div className="year"><h3>2 year</h3><p className="course">Course</p></div>
                    <div className="class-size"><h3>15</h3>
                        <p className="size">Class-size</p></div>
                    <div className="rabota">
                        <h3>8:00-13:00</h3>
                        <p className="duration">Class Duration</p>
                    </div>

                </div>
            </div>
            <div className="col"> <div className="image"><Link to="/thirdpost"><img src="./img/6.jpg" alt="" /></Link></div> <div className="name">
            <h1><Link className='perehod' to="/thirdpost" >БЕСПЛАТНО (Непослушная кошка)</Link></h1>
                <b className="price">$0</b>
                <br />
            </div><h6>15 Reviews</h6>
                <div className="opis-name"><p className="opis">Celebrate succes right,the only way,apple.To <br /> succed you must beleive.When you belirve,<br />you will succed.</p></div>
                <div className="grafic"><div className="year"><h3>2 year</h3><p className="course">Course</p></div>
                    <div className="class-size"><h3>15</h3>
                        <p className="size">Class-size</p></div>
                    <div className="rabota">
                        <h3>8:00-13:00</h3>
                        <p className="duration">Class Duration</p>
                    </div>

                </div>
            </div>
        </div>



    )
}

export default Home