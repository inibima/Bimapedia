import React, { useState } from 'react';
import Article from './Article';
import Menu from './Menu'; // Import Menu
import GoogleLogin from './GoogleLogin'; // Impor GoogleLogin
import danteImage from '../assets/dante.jpg';
import vergilImage from '../assets/vergil.jpg';
import karrieImage from '../assets/karrie.jpg';
import rogerImage from '../assets/roger.jpg';
import kratosImage from '../assets/kratos.jpg';
import zeusImage from '../assets/zeus.jpg';
import leonImage from '../assets/leon.jpg';
import adaImage from '../assets/ada.jpg';

const articles = [
    { 
        id: 1, 
        title: 'Dante (Devil May Cry)', 
        content: `Dante adalah karakter fiksi dan protagonis utama dari seri permainan video Devil May Cry yang dikembangkan dan diterbitkan oleh Capcom. Dia adalah pemburu iblis dan tentara bayaran swasta yang bekerja untuk melenyapkan kekuatan iblis dari dunia manusia, demi membalas kematian ibunya, Eva, dan korupsi serta kebangkitan saudaranya, Vergil. Dante dikenal karena sikapnya yang santai dan humoris, serta kemampuannya yang luar biasa dalam bertarung melawan kekuatan jahat. Permainan ini berfokus pada aksi cepat dengan elemen gaya bertarung yang unik, di mana Dante menggunakan berbagai senjata dan kemampuan sihir untuk melawan musuh-musuhnya.
        
        Inspirasi untuk karakter Dante berasal dari puisi epik "Divine Comedy" karya Dante Alighieri, khususnya bagian "Inferno". Desain dan sifatnya yang flamboyan mencerminkan pengaruh budaya pop dan estetika punk.`,
        image: danteImage,
        category: 'Devil May Cry'
    },
    { 
        id: 2, 
        title: 'Vergil (Devil May Cry)', 
        content: `Vergil adalah karakter fiksi dan antagonis dalam seri permainan video Devil May Cry yang dikembangkan dan diterbitkan oleh Capcom. Dia adalah saudara kembar dari Dante dan sering kali menjadi lawannya dalam cerita. Vergil dikenal karena ambisinya untuk mendapatkan kekuasaan dan ketenangan, serta keahliannya dalam menggunakan pedang dan sihir. Keterampilan bertarungnya yang luar biasa dan sikapnya yang dingin membuatnya menjadi karakter yang menarik dan kompleks.
        
        Nama dan konsep Vergil juga terinspirasi dari "Divine Comedy", dengan referensi kepada penyair Romawi, Virgil, yang membimbing Dante di "Inferno".`,
        image: vergilImage,
        category: 'Devil May Cry'
    },
    { 
        id: 3, 
        title: 'Karrie (Mobile Legends: Bang Bang)', 
        content: `Karrie adalah salah satu hero dalam permainan Mobile Legends: Bang Bang. Dikenal sebagai penembak jitu dengan kecepatan serangan tinggi, Karrie dapat menghancurkan musuh dengan cepat menggunakan serangan jarak jauhnya. Dia adalah pilihan populer dalam permainan karena kemampuannya untuk memberikan kerusakan tinggi terutama kepada musuh dengan pertahanan tinggi. Dengan kemampuan pasifnya, Karrie mampu memberikan true damage yang sangat efektif melawan tank.
        
        Desain Karrie terinspirasi oleh konsep futuristik dan cybernetic, menggabungkan elemen teknologi tinggi dengan seni bela diri.`,
        image: karrieImage,
        category: 'Mobile Legends: Bang Bang'
    },
    { 
        id: 4, 
        title: 'Roger (Mobile Legends: Bang Bang)', 
        content: `Roger adalah hero unik dalam Mobile Legends: Bang Bang yang dapat berubah bentuk antara manusia dan serigala. Dalam bentuk manusia, Roger menggunakan senjata api untuk menyerang dari jarak jauh, sedangkan dalam bentuk serigala, dia menyerang dengan cakarnya yang mematikan. Kemampuan ini membuat Roger sangat fleksibel dan mematikan di medan perang. Kombinasi dari serangan jarak jauh dan serangan cepat dari bentuk serigala membuatnya sulit diatasi oleh musuh.
        
        Konsep Roger terinspirasi oleh legenda manusia serigala, yang merupakan tema umum dalam mitologi dan cerita horor Barat.`,
        image: rogerImage,
        category: 'Mobile Legends: Bang Bang'
    },
    { 
        id: 5, 
        title: 'Kratos (God of War)', 
        content: `Kratos adalah protagonis utama dari seri permainan video God of War yang dikembangkan oleh Santa Monica Studio dan diterbitkan oleh Sony Interactive Entertainment. Dikenal sebagai Ghost of Sparta, Kratos adalah seorang pejuang yang kuat dan brutal yang berusaha menebus dosa-dosa masa lalunya. Dalam perjalanannya, Kratos menghadapi berbagai dewa dan makhluk mitologi, menggunakan kekuatan luar biasa dan kecerdasannya untuk mengatasi musuh-musuhnya. Seri ini dikenal karena alur cerita yang mendalam dan pertarungan yang epik.
        
        Kratos terinspirasi dari mitologi Yunani, dengan namanya diambil dari dewa Kekerasan, Cratos. Desain dan cerita Kratos juga dipengaruhi oleh tragedi Yunani klasik.`,
        image: kratosImage,
        category: 'God of War'
    },
    { 
        id: 6, 
        title: 'Zeus (God of War)', 
        content: `Zeus adalah dewa terkuat dalam mitologi Yunani dan menjadi antagonis dalam beberapa judul dari seri God of War. Dia adalah ayah dari Kratos dan Raja para Dewa di Olympus. Dalam permainan, Zeus digambarkan sebagai sosok yang kuat, berwibawa, namun penuh rasa takut terhadap ramalan yang menyatakan bahwa dia akan digulingkan oleh salah satu keturunannya. Konflik antara Zeus dan Kratos menjadi salah satu inti dari cerita, menggambarkan pertarungan epik antara ayah dan anak.
        
        Zeus diambil langsung dari mitologi Yunani sebagai Raja para Dewa, dan permainan ini memanfaatkan banyak elemen mitos tersebut untuk membangun dunianya.`,
        image: zeusImage,
        category: 'God of War'
    },
    { 
        id: 7, 
        title: 'Leon S. Kennedy (Resident Evil)', 
        content: `Leon S. Kennedy adalah salah satu protagonis utama dalam seri permainan video Resident Evil yang dikembangkan dan diterbitkan oleh Capcom. Leon adalah mantan perwira polisi yang menjadi agen pemerintah setelah bertahan dari wabah zombie di Raccoon City. Dikenal karena keberanian dan ketangkasannya, Leon berperan penting dalam melawan ancaman bioterorisme di seluruh dunia. Permainan ini menyoroti kemampuannya dalam bertahan hidup dan melawan berbagai makhluk yang bermutasi.
        
        Leon terinspirasi dari karakter-karakter film aksi dan horor tahun 1990-an, mencerminkan gaya pahlawan aksi yang tangguh dan cekatan.`,
        image: leonImage,
        category: 'Resident Evil'
    },
    { 
        id: 8, 
        title: 'Ada Wong (Resident Evil)', 
        content: `Ada Wong adalah karakter misterius dalam seri Resident Evil yang dikenal karena kemampuannya dalam mata-mata dan keterampilan bertahan hidup yang luar biasa. Dia sering terlihat bekerja di balik layar, dengan motif yang tidak selalu jelas. Dalam permainan, Ada sering berinteraksi dengan Leon S. Kennedy, dan meskipun hubungan mereka rumit, mereka sering berakhir saling membantu. Karakter Ada dikenal karena kecerdasannya dan kemampuannya untuk menyelesaikan misi yang paling berbahaya sekalipun.
        
        Ada Wong terinspirasi oleh arketipe femme fatale yang sering ditemukan dalam film noir, dengan elemen mata-mata dan intrik yang menambah daya tariknya.`,
        image: adaImage,
        category: 'Resident Evil'
    }
];

const categories = ['All', 'Devil May Cry', 'Mobile Legends: Bang Bang', 'God of War', 'Resident Evil'];

function ArticleList() {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleNextPage = () => {
        if ((currentPage + 1) * articlesPerPage < filteredArticles.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(0);
    };

    const articlesPerPage = 1;
    const filteredArticles = articles.filter(article => 
        selectedCategory === 'All' || article.category === selectedCategory
    );

    const currentArticles = filteredArticles.slice(
        currentPage * articlesPerPage,
        (currentPage + 1) * articlesPerPage
    );

    return (
        <div>
            <Menu onCategoryChange={handleCategoryChange} />
            <GoogleLogin />
            <div className="hero">
                <h2>Welcome to Bimapedia</h2>
                <p>Discover the world of video game characters! Dive into detailed descriptions and explore the stories behind your favorite heroes and villains.</p>
            </div>
            {currentArticles.map(article => (
                <Article key={article.id} title={article.title} content={article.content} image={article.image} />
            ))}
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 0}>
                    Previous
                </button>
                <button onClick={handleNextPage} disabled={(currentPage + 1) * articlesPerPage >= filteredArticles.length}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default ArticleList;