import React from 'react'

const Home = () => {
  return (
    <div>
      <h3 style={{ marginTop: '10px' }}>Sale of bicycles cheap</h3>
      <hr />
      <div style={{display: 'flex' , justifyContent: 'space-between'}}>
        <div style={{ margin: '20px' , border: '1px solid black', width: '300px' }}>
          <img style={{ width: '300px', height: '300px' }} src="https://www.velodrive.ru/upload/medialibrary/fce/khardteyl.jpg" alt="" />
          <h5>Specialized</h5>
        </div>
        <div style={{ margin: '20px' , border: '1px solid black', width: '300px' }}>
          <img style={{ width: '300px', height: '300px' }} src="https://velik-shop.com.ua/wp-content/uploads/2018/02/photo_2022-05-06_13-22-191.jpg" alt="" />
          <h5>Giant Bicycle</h5>
        </div>
        <div style={{ margin: '20px' , border: '1px solid black', width: '300px' }}>
          <img style={{ width: '300px', height: '300px' }} src="https://velik-shop.com.ua/wp-content/uploads/2019/05/photo_2022-05-06_13-20-57-2-600x451.jpg" alt="" />
          <h5>GT</h5>
        </div>
      </div>
    </div>
  )
}

export default Home
