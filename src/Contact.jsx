const Contact = () => {

    const info = [
        { id: 1, title: 'Trade Name:', ans: 'HM Store' },
        { id: 2, title: 'Phone No:', ans: '0325-5910645' },
        { id: 3, title: 'Email:', ans: 'hmstore@gmail.com' }
    ];

    return (
        <div >
            <div className="text-[60px] lg:text-[80px] mt-[90px] text-center font-sans">Contact</div>

            <div className="shadow-[1px_1px_5px_1px_gray] rounded-[10px] mx-[15px] m-[60px] lg:block lg:justify-self-center ">
                {info.map((item) => (
                    <div
                        key={item.id}
                        className="font-sans flex justify-between  p-[10px] lg:grid lg:grid-cols-2  "
                    >
                        <span className=" text-xl font-medium flex tracking-widest">{item.title}</span>
                        <span className="text-gray-600 text-xl">{item.ans}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contact;
