import React, { useState, useEffect } from 'react';
import './Carousel.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Carousel = () => {
  const data = [
    {
      src: 'https://imgs.search.brave.com/_gqd7FAjGX_RkarJbT1fVqRrRPceUY6pkVV8OcmcUwM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzUyLzU0/LzgyLzUyNTQ4MmZh/YzM2Y2IxZDliMWVj/M2Q2YWM2ODQ0ZDNi/LmpwZw',
      alt: 'jogn Cena',
      address: '6 Oak Meadow Road Apt 52 Henrico, VA 23228',
      rooms: '2'
    },
    {
      src: 'https://imgs.search.brave.com/PzvvJcrsB55LiugcBiYt-zXuuxVU-nNIZOQAwQKaIts/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGluZHVzdGFu/dGltZXMuY29tL2lt/Zy8yMDIxLzEwLzE2/LzU1MHgzMDkvOGEx/MTg4NTgtMjZjZS0x/MWVjLTk3YWQtZGVm/MWZlYjEyYjA5XzE2/MzQ0MDkzMDc4NjIu/anBn',
      alt: 'Saumya Tandon',
      address: '42 Saxton Ave.San Carlos, CA 94070',
      rooms: '2',
    },
    {
      src: 'https://imgs.search.brave.com/QPwLPEwNxY3VxbDqfWCFlkmi0fegZ6XLhx9bgDoMFR8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93ZWVr/ZW5kbGVhdmUuY29t/L2luL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzA3L3J1cGFs/aS1nYW5ndWx5Lmpw/Zw',
      alt: 'Pragya',
      address: '95 North Peg Shop Dr. Allison Park, PA 15101',
      rooms: '1'
    },
    {
        src:"https://imgs.search.brave.com/oN93oc09p85zkNyuF4LuAc7EZaggJ6s7eWHAWenQ6NI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9icmlnaHQtbGl2/aW5nLXJvb20tbW9k/ZXJuLWx1eHVyeS1o/b3VzZV8zMDUzNDMt/MTAxMS5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw",
        alt: "Park Queen Apartments",
        address: "558 Thompson Dr.Rahway, NJ 07065",
        rooms: '4'
    },
    {
        src:"https://imgs.search.brave.com/mvOL5kuqxPH8ZpohbJz7VwsNZrsHSmjPsKMTiiysAdY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/b3p5LXN0dWR5LXJv/b20tbW9kZXJuLWFw/YXJ0bWVudF8xODE2/MjQtNTcxNDMuanBn/P3NpemU9NjI2JmV4/dD1qcGc",
        alt: "Central Park Apartments",
        address: "421 Edgefield Road Danvers, MA 01923",
        rooms: "5"
    }
  ];
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, [slide]);

  return (
    <div className="carousel">
      <div className="arrow arrow-left" onClick={prevSlide} style={{ backgroundColor: 'gray', width: '25px', height: '50px', paddingTop: '20px' }}>
        <ArrowBackIcon color="transparent" />
      </div>
      {data.map((item, idx) => {
        return (
          <div className={slide === idx ? 'slide' : 'slide slide-hidden'} key={idx}>
            <img src={item.src} alt={item.alt} />
            <div className="details">
              <h3>Recently Added:</h3>
              <span>
                {item.alt} | {item.address}
              </span>
            </div>
          </div>
        );
      })}
      <div className="arrow arrow-right" onClick={nextSlide} style={{ backgroundColor: 'rgba(0,0,0,0.1)', width: '25px', height: '50px', paddingTop: '20px' }}>
        <ArrowForwardIcon color="black" />
      </div>
      <div className="arrow arrow-left" onClick={prevSlide} style={{ backgroundColor: 'rgba(0,0,0,0.1)', width: '25px', height: '50px', paddingTop: '20px' }}>
        <ArrowBackIcon color="black" />
      </div>
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={slide === idx ? 'indicator' : 'indicator indicator-inactive'}
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
