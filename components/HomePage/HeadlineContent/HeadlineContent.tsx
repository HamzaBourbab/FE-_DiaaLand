import Image from 'next/image'
import Link from 'next/link'
import headline from '@/public/images/headline-image.svg'
import './HeadlineContent.scss'

const HeadlineContent = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="intro">
          <h2>discover your perfect <span>match</span> </h2>
          <p>DiaaLand is a recruitment and IT services platform. We assist companies in finding suitable candidates and empower individuals to secure the best opportunities based on their technical and general skills. We provide a range of services for both candidates and recrtuiters.</p>
          <div className="links">
            <div className="post">
              <Link href='/login' >post opportunity</Link>
            </div>
            <div className="find">
              <Link href='/login' >find opportunity</Link>
            </div>
          </div>
        </div>

        <div className="img">
          <Image 
            src={headline}
            width={500}
            height={500}
            alt='We will see'
          />
        </div>
      </div>
    </div>
  );
}

export default HeadlineContent;
