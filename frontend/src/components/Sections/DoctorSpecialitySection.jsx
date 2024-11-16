import DoctorSpecialityCard from '../Utilities/DoctorSpecialityCard';
import { assets } from '../../assets/assets_frontend/assets';

const DoctorSpecialitySection = () => {
    const Services = [
        {
            title: 'General physician',
            image: assets.General_physician,
            participants: [
                { name: 'User 1', img: 'https://via.placeholder.com/24' },
                { name: 'User 2', img: 'https://via.placeholder.com/24' },
            ],
            bgColor: 'orange',
        },
        {
            title: 'Gynecologist',
            image: assets.Gynecologist,
            participants: [
                { name: 'User 1', img: 'https://via.placeholder.com/24' },
                { name: 'User 2', img: 'https://via.placeholder.com/24' },
            ],
            bgColor: 'green',
        },
        {
            title: 'Dermatologist',
            image: assets.Dermatologist,
            participants: [
                { name: 'User 1', img: 'https://via.placeholder.com/24' },
                { name: 'User 2', img: 'https://via.placeholder.com/24' },
                { name: 'User 3', img: 'https://via.placeholder.com/24' },
            ],
            bgColor: 'purple',
        },
        {
            title: 'Pediatricians',
            image: assets.Pediatricians,
            participants: [
                { name: 'User 1', img: 'https://via.placeholder.com/24' },
                { name: 'User 2', img: 'https://via.placeholder.com/24' },
                { name: 'User 3', img: 'https://via.placeholder.com/24' },
            ],
            bgColor: 'purple',
        },
        {
            title: 'Neurologist',
            image: assets.Neurologist,
            participants: [
                { name: 'User 1', img: 'https://via.placeholder.com/24' },
            ],
            bgColor: 'blue',
        },
        {
            title: 'Gastroenterologist',
            image: assets.Gastroenterologist,
            participants: [
                { name: 'User 1', img: 'https://via.placeholder.com/24' },
                { name: 'User 2', img: 'https://via.placeholder.com/24' },
            ],
            bgColor: 'sky',
        },
    ];
    return (
        <section data-theme='light_blue' className="container mx-auto DoctorsSpeciality my-[10rem] lg:my-[20vh]">
            <div className="section-title mb-5">
                <p className="section-name text-gray-400 text-lg font-semibold">Services</p>
            </div>
            <div className="flex flex-wrap justify-center gap-[.5rem] ">
                {
                    Services.map(
                        (Ele, index) => {
                            return <DoctorSpecialityCard
                                key={index}
                                title={Ele.title}
                                icon={Ele.image}
                                peopleCount={Ele.peopleCount} />
                        }
                    )
                }
            </div>
        </section>
    )
}

export default DoctorSpecialitySection