import React from 'react'

const Item = props => {
    const { content } = props; // Content adında bir obje oluşturarak gelen propsları bunun içerisine ekledik.
    // Content içeriğini div içerisinde sayfaya yazdırıyoruz.
    return (
        <div style={{paddingLeft: '2%'}}> 
            {content} 
        </div>
    )
}

export default Item
