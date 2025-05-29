import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import styles from '@/styles/home.module.css'

function AppFooter() {
  return (
    <footer className={styles.footer}>
      <div className="w-full flex flex-col justify-center px-4 py-2 rounded ">
        <div className="flex justify-start items-center">
          <p className="pr-2">
            Copyright
          </p>
          <FontAwesomeIcon icon={faCircle} size="2xs" />
          <p className="pl-2">
            2024 Devops Hobbies
          </p>
        </div>
        <div className="flex pt-2">
          <Link href="#" className="pr-4 flex items-center "><span className="underline">Pricing</span></Link>
          <Link href="#" className="pr-4 flex items-center "><span className="underline">Contact</span></Link>
          <Link href="#" className="pr-4 flex items-center "><span className="underline">Twitter</span></Link>
          <Link href="#" className="pr-4 flex items-center "><span className="underline">Terms of Service</span></Link>
          <Link href="#" className="flex items-center "><span className="underline">Privacy Policy</span></Link>
        </div>
      </div>

    </footer>
  )
}

export default AppFooter
