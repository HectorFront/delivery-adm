import {memo, ReactNode} from "react";

type Carousel = {
    dots: number,
    id?: string | null,
    children: ReactNode
}

type CarouselItem = {
    active?: boolean,
    children: ReactNode
}

export const Container = memo(({ dots = 0, id = crypto.randomUUID(), children }: Carousel) => {
    const countBtnSocialCarousel = Array.from(Array(dots).keys());
    const idCarousel = `carousel-${id}`;
    return (
        <div id={idCarousel} className="carousel carousel-dark slide" data-bs-ride data-bs-interval={false}>
            <div className="carousel-indicators">
                {countBtnSocialCarousel.map(i =>
                    <button
                        key={i}
                        aria-current
                        type="button"
                        data-bs-slide-to={i}
                        data-bs-target={`#${idCarousel}`}
                        className={`${i === 0 && 'active'} bg-color-dark`}
                    />
                )}
            </div>
            <div className="carousel-inner">
                {children}
            </div>
            <button style={{ left: '-100px' }} className="carousel-control-prev" type="button" data-bs-target={`#${idCarousel}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button style={{ right: '-100px' }} className="carousel-control-next" type="button" data-bs-target={`#${idCarousel}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
});

export const Item = memo(({ active = false, children }: CarouselItem) =>
    <div className={`carousel-item ${active && 'active'}`} data-bs-interval={false}>
        {children}
    </div>
);