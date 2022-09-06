import codeAdd from "../resource/code-snippet-1.png"
import codeTestAdd from "../resource/code-snippet-2.png"

const Testing = () => {
    return (
        <>
          <div className="content-box container pt-5">

            <div className="row w-100 mt-5 pt-5">
                <div className="col">
                    <h1>Testing</h1>
                </div>
 
            </div>
            <div className="row w-100">

                <div className="col">
                    <div className="mb-5">Because MobX classes behave like object literals, testing is quite simple.</div>
                    <div className="row">
                        <img className="d-inline w-50 h-100" src={codeAdd} alt="code of add todo function" />
                        <img className="d-inline w-50" src={codeTestAdd} alt="code of add todo test function" />
                
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Testing;