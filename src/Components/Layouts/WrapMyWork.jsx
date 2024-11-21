import WorkCard from "../PageCards/WorkCard";
import MWork1 from '../../assets/mwork1.png';
import Work2 from '../../assets/work2.png';
import Flex from '../Flex'


const WrapMyWork = () => {
    return (
        <div className="max-w-[980px] ml-20">
            <Flex className='gap-x-4'>
            <WorkCard img={MWork1} text="Motion Graphics" Btext="Website" />
            <WorkCard img={Work2} text="E-Learning" Btext="IOS App" />
            </Flex>

            <Flex className='gap-x-4'>
            <WorkCard img={MWork1} text="Web Application" Btext="Desktop" />
            <WorkCard img={Work2} text="Visual Design" Btext="Desktop" />
            </Flex>
        </div>
    );
};

export default WrapMyWork;
