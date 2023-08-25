import React, { useState } from 'react';
import '../style/Properties.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
const dummyData = [
  {
    id: 1,
    title: 'Luxury Property',
    tag: 'New Listing',
    images: ['https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/123/images/1985/1000px_main_g49hecY8yPej2ssAWFlZUdWln4KNa4SH0EOX2UIh.jpeg'],
    location: 'City, Country',
    status: 'Rented',
    price: 'AED 15000',
    progress: 37,
    annualReturn: 9,
    annualAppreciation: 6,
    netYield: 7,
  },
  {
    id: 2,
    title: 'Luxury Property',
    tag: 'New Listing',
    images: ['https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/123/images/1985/1000px_main_g49hecY8yPej2ssAWFlZUdWln4KNa4SH0EOX2UIh.jpeg'],
    location: 'City, Country',
    status: 'Rented',
    price: 'AED 15000',
    progress: 50,
    annualReturn: 9,
    annualAppreciation: 6,
    netYield: 7,
  },
  {
    id: 3,
    title: 'Luxury Property',
    tag: 'New Listing',
    images: ['https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/123/images/1984/1740px_main_HQxZeWrKPgfn4URgbONAjaieON2zNahJ04gYdrmz.jpeg'],
    location: 'City, Country',
    status: 'Rented',
    price: 'AED 15000',
    progress: 7,
    annualReturn: 9,
    annualAppreciation: 6,
    netYield: 7,
  },
  {
    id: 4,
    title: 'Luxury Property',
    tag: 'New Listing',
    images: ['https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/123/images/1986/2400px_main_8XKJOq1a2MdCw0lwYvSjyAeQLZqYUYrhAg2puLIn.jpeg'],
    location: 'City, Country',
    status: 'Rented',
    price: 'AED 15000',
    progress: -2,
    annualReturn: 9,
    annualAppreciation: 6,
    netYield: 7,
  },
  {
    id: 5,
    title: 'Luxury Property',
    tag: 'New Listing',
    images: ['https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/125/images/2017/1000px_main_z6gkh90IF1gZ1uonnRMgammHXnhKUNXBetARjWew.jpeg'],
    location: 'City, Country',
    status: 'Rented',
    price: 'AED 15000',
    progress: -2,
    annualReturn: 9,
    annualAppreciation: 6,
    netYield: 7,
  },
  {
    id: 6,
    title: 'Luxury Property',
    tag: 'New Listing',
    images: ['https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/121/images/1953/1778px_main_2Ic4itA2Urp2aBFh68pPSVv53bOp0quYzucaQt7s.jpeg'],
    location: 'City, Country',
    status: 'Rented',
    price: 'AED 15000',
    progress: -2,
    annualReturn: 9,
    annualAppreciation: 6,
    netYield: 7,
  },
  {
    id: 7,
    title: 'Luxury Property',
    tag: 'New Listing',
    images: ['https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/126/images/2027/1000px_main_IEgipuRkMFw1aS2VKNyY3SEm03dJmx9NNxb8bgT0.jpeg'],
    location: 'City, Country',
    status: 'Rented',
    price: 'AED 15000',
    progress: -2,
    annualReturn: 9,
    annualAppreciation: 6,
    netYield: 7,
  },
  {
    id: 8,
    title: 'Luxury Property',
    tag: 'New Listing',
    images: ['https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/123/images/1985/1000px_main_g49hecY8yPej2ssAWFlZUdWln4KNa4SH0EOX2UIh.jpeg'],
    location: 'City, Country',
    status: 'Rented',
    price: 'AED 15000',
    progress: -2,
    annualReturn: 9,
    annualAppreciation: 6,
    netYield: 7,
  },
  {
    id: 9,
    title: 'Luxury Property',
    tag: 'New Listing',
    images: ['https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/123/images/1985/1000px_main_g49hecY8yPej2ssAWFlZUdWln4KNa4SH0EOX2UIh.jpeg'],
    location: 'City, Country',
    status: 'Rented',
    price: 'AED 15000',
    progress: -2,
    annualReturn: 9,
    annualAppreciation: 6,
    netYield: 7,
  },
  {
    id: 10,
    title: 'Luxury Property',
    tag: 'New Listing',
    images: ['https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/123/images/1985/1000px_main_g49hecY8yPej2ssAWFlZUdWln4KNa4SH0EOX2UIh.jpeg'],
    location: 'City, Country',
    status: 'Rented',
    price: 'AED 15000',
    progress: -2,
    annualReturn: 9,
    annualAppreciation: 6,
    netYield: 7,
  }
];


const Card = ({ data }) => {
  return (
    <div className="P-card">
      <div className="card-header">
        <div className="tag">{data.tag}</div>
      </div>
      <div className="card-carousel">
        {data.images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
      <div className="card-content">

        <div className="property-title">{data.title}</div>
        <div className="property-location">{data.location}</div>
        <div className="property-status">{data.status}</div>
        <div className="property-price">{data.price}</div>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${data.progress}%`, backgroundColor: '#63b377', height: '12px', borderRadius: '10px' }}
          />
        </div>
        <div className="property-metrics">
          <div>Annual Return: {data.annualReturn}%</div>
          <div>Annual Appreciation: {data.annualAppreciation}%</div>
          <div>Project Net Yield: {data.netYield}%</div>
        </div>
      </div>
    </div>
  );
};

const Properties = () => {
  const [activeFilter, setActiveFilter] = useState('Available');

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredData = dummyData.filter((item) => {
    if (activeFilter === 'Available') {
      return item.progress < 100;
    } else if (activeFilter === 'Funded') {
      return item.progress === 50;
    } else if (activeFilter === 'Exited') {
      return item.progress < 0
    }
    return true;
  });


  return (
    <div>

      <Header />
      <div className="P-properties">
        <section>
          <div className='P-properties-section'>
            <h1 className='properties-heading'>
              Properties
            </h1>

            <p>
              With over 20 years of experience leading major real estate companies in Dubai, we <br></br>utilize our expertise and network to find properties with the greatest investment<br></br> potential for you.
            </p>
          </div>

        </section>
        <div className='filter-force'>
          <div className="P-filter-container">
            <button onClick={() => handleFilterChange('Available')}>Available</button>
            <button onClick={() => handleFilterChange('Funded')}>Funded</button>
            <button onClick={() => handleFilterChange('Exited')}>Exited</button>
          </div>
        </div>
        <div className="P-card-container">
          {filteredData.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Properties;
