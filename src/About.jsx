const About = () => {
  const service = [
    {
      head: 'Free Shipping',
      explain:
        'Receive your product Within 2-3 Working days. Free Cash on Delivery all over Pakistan.',
      img: 'https://cdn-icons-png.flaticon.com/128/11153/11153380.png',
    },
    {
      head: 'Return or Refunded',
      explain:
        'You can return your product within 7 days of receiving it. To request a refund.',
      img: 'https://cdn-icons-png.flaticon.com/128/18327/18327092.png',
    },
    {
      head: 'Customer Support',
      explain:
        '24/7 customer support that is respectful and helpful. Your satisfaction is our top priority.',
      img: 'https://cdn-icons-png.flaticon.com/128/2020/2020773.png',
    },
  ]

  return (
    <div>

      <div
        className="text-[60px] lg:text-[80px] text-center mt-20 font-sans ">
        About Us
      </div>

      <div className="mx-7 my-[20px] lg:mx-[40px] [text-wrap:wrap] [word-spacing:4px] font-[Arial,Helvetica,sans-serif] text-[#6c757d]">
        HM Store is Pakistan&apos;s most trusted ecommerce platform for tech products. We
        offer high-quality products, True Wireless Earphones, Smartwatch, Bluetooth
        Headphones, Bluetooth Speakers, power-banks, Gaming Headsets and much more.
        Free cash on delivery, and a 100% satisfaction guarantee. Shop with confidence
        today!
        <br />
        <br />
        <div className=" mb-[15px]">
          Here are some of the benefits of shopping at HM Store:</div>
        <ul>
          <div className=" ml-[40px]">
            <li>● Most trusted ecommerce platform in Pakistan</li>
            <li>● Wide selection of high-quality tech products</li>
            <li>● Free cash on delivery in Pakistan</li>
            <li>● 100% satisfaction guarantee</li>
            <li>● 100% Money Back guarantee</li>
            <li>● 24/7 customer support</li></div>
        </ul>
      </div>

      {/* Services */}
      <div className="block my-[50px]
       lg:my-[50px] mx-[15px] lg:mx-[30px] lg:h-auto lg:flex lg:justify-between">
        {service.map((service, index) => (
          <div
            key={index}
            className="my-5 mx-[10px] justify-between rounded-[10px] p-[10px] shadow-[1px_1px_5px_#6c757d]">
            <img
              src={service.img}
              alt={service.head}
              className="h-[130px] w-[130px] block mx-auto mb-[30px]"
            />
            <div className="text-center text-[x-large] text-[#343a40] font-[Verdana,Geneva,Tahoma,sans-serif]">
              {service.head}
            </div>
            <div className=" inline-block text-center font-lighter mt-[10px] mx-2  text-[#6c757d] font-sans text-l/6.5">
              {service.explain}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
