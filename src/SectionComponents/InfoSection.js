

const InfoSection = () => {

    const sampleColorStyle ={
     background: "gradient(#f69d3c, #3f87a6)"
    }

    return (
        <main>
            <div className="sampleColor" style={sampleColorStyle}>here</div>
            <article>
                <section>
                    <h2 className="subtitle">About CSS Gradients</h2>
                    <p className="parraf">The CSS Gradient online generator tool is a nice and simple to use utility to quickly generate linear and radial color gradients. You can create the gradients and export the CSS code with colors in HEX or RGB format</p>
                    <p>Keep reading below to learn more about Linear Gradients, Radial Gradients or Text Gradients.</p>
                    <p>Or, et inspired and discover more gradient backgrounds by color: Red gradient bacrounds, Orange gradient backgrounds, Yellow gradient backgrounds, Green gradient backgrounds. Azure gradient backgraunds, Blue gradient backgraunds, Purple gradient backgraunds, Pink gradient backgraunds or Monochrome gradient backgraunds</p>    
                </section>
            </article>
        </main>
    )
}

export default InfoSection;