import bannerHomeStyle from '../styles-master/component/BannerHome.scss';

export default () => (
    <section className="banner-home">
        <img src="./static/images/banner-1.jpg" alt="shopee"/>
        <div className="container">
            <div className="banner-home__desktop"></div>
        </div>
        
        <style dangerouslySetInnerHTML={{ __html: bannerHomeStyle }} />
    </section>
)