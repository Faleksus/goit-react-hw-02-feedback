import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <div>
      <div className={css.countBtn}>
        {options.map(option => (
            <button
            key={option}
            className={css.countBtnItem}
            onClick={() => onLeaveFeedback(option)}
          >{option}</button>
        ))}
      </div>
    </div>
  )
}
