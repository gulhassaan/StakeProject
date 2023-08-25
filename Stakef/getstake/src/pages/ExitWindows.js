import React from 'react'
import '../style/ExitWindows.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
const ExitWindows = () => {
    return (
        <div>
            <Header />
            <div className='exitwindow'>
                <div className='svg-con'><svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-9lz13n" width="20px" aria-label="store-mobile-1">
                    <g fill="none" fill-rule="nonzero" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <g><path d="M8.499 2.996v1.801a.557.557 0 00.5.6H13a.557.557 0 00.5-.6v-1.8">
                        </path><path d="M7.998 21.004h-1a2 2 0 01-2-2.001V4.997a2 2 0 012-2H15a2 2 0 012.001 2V9M12 16.15v4.854M20.003 21.004V16.15M16.002 21.004v-2.001M11.52 21.004h8.963">
                            </path><path d="M12.516 16.244v0a1.518 1.518 0 01-1.353-2.203l.66-1.302A1.35 1.35 0 0113.023 12h5.953c.508 0 .974.285 1.204.738l.66 1.302a1.518 1.518 0 01-1.354 2.203 1.745 1.745 0 01-1.652-1.183.1.1 0 00-.183 0 1.744 1.744 0 01-3.303 0 .1.1 0 00-.183 0 1.745 1.745 0 01-1.653 1.183">
                            </path></g></g></svg><p>
                        Exit windows are available on mobile only
                    </p></div>
                <h1><span className='flex'>Flexibility</span> and <span className='flex'>liquidity</span> for your <br></br> real estate portfolio</h1>
                <p className='trading'>This is not a trading tool, it's an exit strategy</p>
                <div className='exit-btn'> <NavLink><button className='buy-shares'>Buy shares</button></NavLink>
                    <NavLink><button className='sell-stakes'>Sell Stakes</button></NavLink>
                </div></div>



            <div className='exitwindow-open'>
                <img src='https://getstake.com/assets/secondary-market/landing-phone.png'></img>
            </div>


            <div className='triple-manage'>
                <div className='yellow-div'>
                <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-1dlsnza" width="40px" aria-label="pie-2"><g fill="none" fill-rule="nonzero" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g><path d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"></path><path d="M21 10a7 7 0 00-7-7v7h7z"></path></g></g></svg>
                    <p>Manage your portfolio</p>
                    </div>
                    <hr></hr>
                <div className='yellow-div'>
                <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-1dlsnza" width="40px" aria-label="store-discount"><g fill="none" fill-rule="nonzero" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g><path d="M21 20.0001L16 19.9999"></path><path d="M19.78 20V9.98706"></path><path d="M4 16.9739V15.046C4 14.5034 4.21557 13.9829 4.59928 13.5992C4.98299 13.2155 5.50341 13 6.04605 13H7.97353C8.51614 13 9.03653 13.2155 9.42023 13.5992L12.4007 16.5793C13.1997 17.3782 13.1998 18.6736 12.4009 19.4727L10.4735 21.4006C10.0898 21.7843 9.56937 22 9.0267 22C8.48403 22 7.96358 21.7845 7.57983 21.4008L4.59935 18.4207C4.21559 18.037 4 17.5165 4 16.9739Z"></path><path d="M6.96469 15.9646C6.98423 15.9451 7.01587 15.9451 7.03538 15.9647C7.05488 15.9842 7.05487 16.0158 7.03536 16.0354C7.01584 16.0549 6.9842 16.0549 6.96467 16.0354C6.94514 16.0159 6.94511 15.9842 6.9646 15.9647L6.96469 15.9646"></path><path d="M2.27578 6.47765C1.98065 7.03345 1.92197 7.68473 2.113 8.28433C2.44346 9.32453 3.41962 10.0228 4.5108 9.99943C5.60198 9.9761 6.5474 9.23678 6.8331 8.18341C6.85121 8.12223 6.90742 8.08025 6.97122 8.08025C7.03503 8.08025 7.09124 8.12223 7.10935 8.18341C7.40109 9.25558 8.37468 9.99958 9.48584 9.99946C10.597 9.99934 11.5704 9.25514 11.8619 8.1829C11.88 8.12169 11.9362 8.07968 12 8.07968C12.0639 8.07968 12.1201 8.12169 12.1381 8.1829C12.4298 9.2551 13.4034 9.99918 14.5145 9.99914C15.6257 9.9991 16.5992 9.25495 16.8908 8.18273C16.9089 8.12156 16.9651 8.0796 17.0289 8.0796C17.0927 8.0796 17.1489 8.12156 17.167 8.18273C17.4528 9.23599 18.3981 9.97521 19.4892 9.99858C20.5803 10.0219 21.5564 9.32387 21.887 8.28381C22.0781 7.68412 22.0194 7.0327 21.7242 6.47681L20.0175 3.09822C19.6773 2.4247 18.9869 2 18.2324 2H5.76809C5.01351 2 4.32316 2.4247 3.98293 3.09822L2.27578 6.47765Z"></path></g></g></svg>
                    <p>Buy at a discount</p>
                    </div>
                    <hr></hr>
                <div className='yellow-div'>
                <svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-1dlsnza" width="40px" aria-label="money-down"><g fill="none" fill-rule="nonzero" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g><path d="M11.793 9.205l3.414-3.414M11.575 5.655a.083.083 0 110 0v0"></path><path d="M7.998 6.998v-1.7A3.301 3.301 0 0111.3 1.995H15.7a3.301 3.301 0 013.302 3.301V9.7A3.301 3.301 0 0115.7 13h-.7"></path><path d="M15.426 9.342a.082.082 0 110 0v0M19.003 21.004v-5.002M21.004 19.003l-2.001 2M17.002 19.003l2 2M2.996 12.6v6.803c.001.884 1.792 1.6 4.002 1.6s4-.716 4.002-1.6V12.6"></path><path d="M10.998 12.6c0 .884-1.791 1.6-4.001 1.6-2.21 0-4-.716-4-1.6 0-.885 1.792-1.6 4-1.6 2.21 0 4.001.716 4.003 1.6M2.997 16.002c0 .883 1.79 1.6 4 1.6S11 16.885 11 16.002"></path></g></g></svg>
                    <p>Sell your Stakes</p>
                    </div>
            </div>



            <div className='biannual'>
                <h2>Biannual exit windows</h2>





                <div className='calandar'>
                  <div className='jan'><p>Jan</p></div>
                  <div className='feb'><p>Feb</p></div>
                  <div className='mar'><p>Mar</p></div>
                  <div className='apr'><p>Apr</p></div>
                  <div className='may'><p className='extra-text'>
The first window <br></br> opens on May 2, 2023</p><div className='hor-svg'><svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-kgoxx1" width="35px" aria-label="store-discount"><g fill="none" fill-rule="nonzero" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g><path d="M21 20.0001L16 19.9999"></path><path d="M19.78 20V9.98706"></path><path d="M4 16.9739V15.046C4 14.5034 4.21557 13.9829 4.59928 13.5992C4.98299 13.2155 5.50341 13 6.04605 13H7.97353C8.51614 13 9.03653 13.2155 9.42023 13.5992L12.4007 16.5793C13.1997 17.3782 13.1998 18.6736 12.4009 19.4727L10.4735 21.4006C10.0898 21.7843 9.56937 22 9.0267 22C8.48403 22 7.96358 21.7845 7.57983 21.4008L4.59935 18.4207C4.21559 18.037 4 17.5165 4 16.9739Z"></path><path d="M6.96469 15.9646C6.98423 15.9451 7.01587 15.9451 7.03538 15.9647C7.05488 15.9842 7.05487 16.0158 7.03536 16.0354C7.01584 16.0549 6.9842 16.0549 6.96467 16.0354C6.94514 16.0159 6.94511 15.9842 6.9646 15.9647L6.96469 15.9646"></path><path d="M2.27578 6.47765C1.98065 7.03345 1.92197 7.68473 2.113 8.28433C2.44346 9.32453 3.41962 10.0228 4.5108 9.99943C5.60198 9.9761 6.5474 9.23678 6.8331 8.18341C6.85121 8.12223 6.90742 8.08025 6.97122 8.08025C7.03503 8.08025 7.09124 8.12223 7.10935 8.18341C7.40109 9.25558 8.37468 9.99958 9.48584 9.99946C10.597 9.99934 11.5704 9.25514 11.8619 8.1829C11.88 8.12169 11.9362 8.07968 12 8.07968C12.0639 8.07968 12.1201 8.12169 12.1381 8.1829C12.4298 9.2551 13.4034 9.99918 14.5145 9.99914C15.6257 9.9991 16.5992 9.25495 16.8908 8.18273C16.9089 8.12156 16.9651 8.0796 17.0289 8.0796C17.0927 8.0796 17.1489 8.12156 17.167 8.18273C17.4528 9.23599 18.3981 9.97521 19.4892 9.99858C20.5803 10.0219 21.5564 9.32387 21.887 8.28381C22.0781 7.68412 22.0194 7.0327 21.7242 6.47681L20.0175 3.09822C19.6773 2.4247 18.9869 2 18.2324 2H5.76809C5.01351 2 4.32316 2.4247 3.98293 3.09822L2.27578 6.47765Z"></path></g></g></svg></div><p>May</p></div>
                  <div className='jun'><p>Jun</p></div>
                  <div className='jul'><p>Jul</p></div>
                  <div className='aug'><p>Aug</p></div>
                  <div className='sep'><p>Sep</p></div>
                  <div className='oct'><p>Oct</p></div>
                  <div className='may'><p className='extra-text'>The next window <br></br> opens on Nov 2, 2023</p><div className='hor-svg'><svg viewBox="0 0 24 24" focusable="false" class="chakra-icon css-kgoxx1" width="35px" aria-label="store-discount"><g fill="none" fill-rule="nonzero" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g><path d="M21 20.0001L16 19.9999"></path><path d="M19.78 20V9.98706"></path><path d="M4 16.9739V15.046C4 14.5034 4.21557 13.9829 4.59928 13.5992C4.98299 13.2155 5.50341 13 6.04605 13H7.97353C8.51614 13 9.03653 13.2155 9.42023 13.5992L12.4007 16.5793C13.1997 17.3782 13.1998 18.6736 12.4009 19.4727L10.4735 21.4006C10.0898 21.7843 9.56937 22 9.0267 22C8.48403 22 7.96358 21.7845 7.57983 21.4008L4.59935 18.4207C4.21559 18.037 4 17.5165 4 16.9739Z"></path><path d="M6.96469 15.9646C6.98423 15.9451 7.01587 15.9451 7.03538 15.9647C7.05488 15.9842 7.05487 16.0158 7.03536 16.0354C7.01584 16.0549 6.9842 16.0549 6.96467 16.0354C6.94514 16.0159 6.94511 15.9842 6.9646 15.9647L6.96469 15.9646"></path><path d="M2.27578 6.47765C1.98065 7.03345 1.92197 7.68473 2.113 8.28433C2.44346 9.32453 3.41962 10.0228 4.5108 9.99943C5.60198 9.9761 6.5474 9.23678 6.8331 8.18341C6.85121 8.12223 6.90742 8.08025 6.97122 8.08025C7.03503 8.08025 7.09124 8.12223 7.10935 8.18341C7.40109 9.25558 8.37468 9.99958 9.48584 9.99946C10.597 9.99934 11.5704 9.25514 11.8619 8.1829C11.88 8.12169 11.9362 8.07968 12 8.07968C12.0639 8.07968 12.1201 8.12169 12.1381 8.1829C12.4298 9.2551 13.4034 9.99918 14.5145 9.99914C15.6257 9.9991 16.5992 9.25495 16.8908 8.18273C16.9089 8.12156 16.9651 8.0796 17.0289 8.0796C17.0927 8.0796 17.1489 8.12156 17.167 8.18273C17.4528 9.23599 18.3981 9.97521 19.4892 9.99858C20.5803 10.0219 21.5564 9.32387 21.887 8.28381C22.0781 7.68412 22.0194 7.0327 21.7242 6.47681L20.0175 3.09822C19.6773 2.4247 18.9869 2 18.2324 2H5.76809C5.01351 2 4.32316 2.4247 3.98293 3.09822L2.27578 6.47765Z"></path></g></g></svg></div><p>Nov</p></div>
                  <div className='dec'><p>Dec</p></div>

                </div>
            </div>



            <Footer />
        </div>
    )
}

export default ExitWindows