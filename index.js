import {useState, useEffect} from 'react'
import axios from 'axios'

import './index.css'

import {TbShoppingBagPlus, TbPaperBag} from 'react-icons/tb'
import {IoBagOutline} from 'react-icons/io5'
import {GiSchoolBag, GiShoulderBag, GiBeachBag} from 'react-icons/gi'
import {BsBagFill, BsDuffle, BsBagDash} from 'react-icons/bs'
import {HiMiniArrowUpTray} from 'react-icons/hi2'
import {MdLaptopMac} from 'react-icons/md'
import {CiBookmark, CiSearch, CiUser} from 'react-icons/ci'

import {FaIndianRupeeSign} from 'react-icons/fa6'

const ReviewsCarousel = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        setReviews(response.data)
      } catch (error) {
        console.error('Error fetching reviews:', error)
      }
    }

    fetchReviews()
  }, [])

  return (
    <div className="review-container">
      <div className="header-section">
        <h3 className="header-heading">TANN TRIM </h3>
        <div className="header-icons">
          <h1>
            <CiSearch className="head-icon" />
            <CiUser className="head-icon" />
            <CiBookmark className="head-icon" />
            <IoBagOutline className="head-icon" />
          </h1>
        </div>
      </div>

      <div className="header-menu">
        <h3 className="menu">Bags</h3>
        <h3 className="menu">Travel</h3>
        <h3 className="menu">Accessories</h3>
        <h3 className="menu">Gifting</h3>
        <h3 className="menu">Jewelery</h3>
      </div>

      <div className="nav-cont">
        <div>
          <GiSchoolBag className="head-icons" />
          <p className="nav-head">All bags</p>
        </div>
        <div>
          <GiShoulderBag className="head-icons" />
          <p className="nav-head">Vanity Pouch</p>
        </div>
        <div>
          <BsBagFill className="head-icons" />
          <p className="nav-head">Tote bags</p>
        </div>
        <div>
          <BsDuffle className="head-icons" />
          <p className="nav-head">Duffle bags</p>
        </div>
        <div>
          <MdLaptopMac className="head-icons" />
          <p className="nav-head">Laptop Sleeve</p>
        </div>
        <div>
          <TbPaperBag className="head-icons" />
          <p className="nav-head">Messenger bags</p>
        </div>
        <div>
          <GiBeachBag className="head-icons" />
          <p className="nav-head">Sling bags</p>
        </div>
        <div>
          <BsBagDash className="head-icons" />
          <p className="nav-head">Handbags</p>
        </div>
      </div>

      <div className="heading-section">
        <h2 className="review-heading">Bags backpacks</h2>
        <h2 className="review-heading">
          13 Products <HiMiniArrowUpTray />
        </h2>
      </div>

      <ul>
        <div className="card-wrappers">
          {reviews.map(review => (
            <li key={review.id}>
              <div className="review-card">
                {/* Display image */}

                <div className="card-image">
                  <img
                    src={review.image}
                    alt={`Review for product ${review.id}`}
                    className="review-image"
                  />
                </div>
                <div className="bookmark">
                  <CiBookmark className="book-icons" />
                </div>
                <br />
                <span className="review-para">{review.title}</span>
                <br />
                <div className="card-footer">
                  <div className="icons">
                    <span className="review-price">
                      {' '}
                      <FaIndianRupeeSign className="price-icons" />
                      {review.price} <span className="dis">8999 </span>
                      <span className="offers">(50% off)</span>
                    </span>
                  </div>
                  <TbShoppingBagPlus className="bag-icons" />
                </div>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  )
}

export default ReviewsCarousel
