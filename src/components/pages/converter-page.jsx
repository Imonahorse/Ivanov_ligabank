import React from 'react';
import Header from '../header/header';
import Intro from '../intro/intro';
import styles from './converter-page.module.scss';
import Exchanger from '../exchanger/exchanger';
import History from '../history/history';
import Footer from '../footer/footer';

function ConverterPage() {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <main>
        <Intro/>
        <Exchanger/>
        <History/>
      </main>
      <Footer/>
    </div>
  );
}

export default ConverterPage;
