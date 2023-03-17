import {memo, ReactNode} from "react";

type Carousel = {
    dots: number,
    children: ReactNode
}

type CarouselItem = {
    active?: boolean,
    children: ReactNode
}

export const Container = memo(({ dots = 0, children }: Carousel) => {
    const countBtnSocialCarousel = Array.from(Array(dots).keys());
    return (
        <div id="social-carousel" className="carousel carousel-dark slide" data-bs-ride="true">
            <div className="carousel-indicators">
                {countBtnSocialCarousel.map(i =>
                    <button
                        type="button"
                        aria-current="true"
                        data-bs-slide-to={i}
                        style={{ height: 5 }}
                        data-bs-target="#social-carousel"
                        className={`${i === 0 && 'active'} bg-dark`}
                    />
                )}
            </div>
            <div className="carousel-inner">
                {children}
            </div>
            <button style={{ left: '-100px' }} className="carousel-control-prev" type="button" data-bs-target="#social-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button style={{ right: '-100px' }} className="carousel-control-next" type="button" data-bs-target="#social-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
});

export const Item = memo(({ active = false, children }: CarouselItem) =>
    <div className={`carousel-item ${active && 'active'}`}>
        {children}
    </div>
);