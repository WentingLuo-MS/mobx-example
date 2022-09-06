

const Comparison = () => {
    const linkStyle = "d-block";
  return (
    <>
        <div id="definition" className="container-fluid content-box position-relative d-flex align-items-center justify-content-center mx-0 ">
        <div className="row w-100 align-items-center">
            <div className="col h-100">
            <h1 className="">What is MobX?</h1>
            </div>
            
            <div className="col h-100">
            <p className="text-muted text-start fs-4 font-weight-light">Basically, MobX is a JS state management library.</p>
            <p className="fs-4 text-start mt-5">A statement that defines MobX very well is:</p>
            <blockquote className="blockquote text-end">
                <p className="lead">Anything that can be derived from the application state, should be derived. Automatically.</p>
                <footer className="blockquote-footer">mobxjs/mobx</footer>
            </blockquote>
            </div>
        </div>
        </div>
    </>
  );
};

export default Comparison;
