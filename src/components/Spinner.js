import Loading from './loading.gif'

export default function Spinner() {
    return (
        <div className='text-center m-5'>
            <img src={Loading} alt='Loading' style={{ height: '45px' }} />
        </div>
    );
}