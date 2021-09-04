import './HorizontalSlider.css'
import { url } from '../common/constants';

const ShowProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {  
    Axios  
        .get(url + "/shop")  
        .then(result => setData(result.data));  
    console.log(data);  
}, []); 
  return (
    <div className="slider-container">
      
    </div>
  )
}

export default ShowProducts
