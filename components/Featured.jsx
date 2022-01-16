import styles from '../styles/Featured.module.css';
import Image from 'next/image';
import { useState } from 'react';

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = ['/img/pizza1.jpg', '/img/pizza2.jpg', '/img/pizza3.jpg'];

  const handleArrow = (direction) => {
    if (direction === 'l') {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === 'r') {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
        }}
        className={styles.title}>
        <h3
          style={{
            fontSize: '18px',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '15px',
          }}>
          Featured Products
        </h3>
      </div>
      <div className={styles.container}>
        <div
          className={styles.arrowContainer}
          style={{ left: 0 }}
          onClick={() => handleArrow('l')}>
          <Image
            src='/img/arrowl.png'
            alt=''
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div
          className={styles.wrapper}
          style={{
            transform: `translateX(${-100 * index}vw)`,
          }}>
          {images.map((img, i) => (
            <div
              className={styles.imgContainer}
              key={i}
              style={{
                width: '100%',
                height: '500px',
                alignItems: 'center',
                marginTop: '30px',
              }}>
              <Image src={img} alt='' layout='fill' objectFit='contain' />
            </div>
          ))}
        </div>
        <div
          className={styles.arrowContainer}
          style={{ right: 0 }}
          onClick={() => handleArrow('r')}>
          <Image
            src='/img/arrowr.png'
            layout='fill'
            alt=''
            objectFit='contain'
          />
        </div>
      </div>
    </>
  );
};

export default Featured;
