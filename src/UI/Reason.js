const Reason = ( {logo, header, text} ) => {
    return (
        <div className="reason--container">
            <img src={logo} alt={header}/>
            <h2>{header}</h2>
            <p>{text}</p>
        </div>
    )
};

export default Reason;