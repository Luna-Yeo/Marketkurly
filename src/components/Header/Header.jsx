import React from 'react';
import styles from './header.module.css';

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.inner}>
                    <ul>
                        <li className={styles.join}>회원가입</li>
                        <li className={styles.login}>로그인</li>
                        <li className="">고객센터</li>
                    </ul>
                    <div className="">
                        <div className={styles.left}>
                            <h1 className={styles.logo}>
                                <a href="https://www.kurly.com/main">
                                    <img src="" alt="" />
                                </a>
                            </h1>
                            <span className={styles.kurly}>마켓컬리</span>
                        </div>
                        <div className={styles.searchBar}>
                            <input type="검색어를 입력해주세요" />
                            <div className={styles.icon}></div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.location}></div>
                            <div className={styles.wish}></div>
                            <div className={styles.cart}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.gnbWrap}>
                    <div className={styles.category}></div>
                    <ul className={styles.gnb}>
                        <li>신상품</li>
                        <li>베스트</li>
                        <li>알뜰쇼핑</li>
                        <li>특가/혜택</li>
                    </ul>
                    <div className={styles.info}></div>
                </div>
            </header>
        </>
    );
}
