import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ setPage, page }) => {
    return (
        <div className={css.box}>
          <button className={css.btn} onClick={()=>setPage(page+1)}>Load more</button>
        </div>
    )
}

export default LoadMoreBtn;