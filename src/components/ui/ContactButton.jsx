const ContactButton = () => {
    return (
        <button className="button " onClick={() => {console.log("heelo")}
        }>
        Conact Me
        <div className="hoverEffect">
          <div></div>
        </div>
      </button>
    )
}

export default ContactButton