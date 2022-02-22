import spinnerImg from '../spinner.gif';

const Spinner = () => {
    return(
      <div className="my2 text-center col-md-12">
          <img  src={spinnerImg} alt="Loading..."/>
      </div>  
    );
}

export default Spinner;