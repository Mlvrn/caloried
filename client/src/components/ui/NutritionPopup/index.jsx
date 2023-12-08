import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import { Dialog, DialogContent, DialogTitle, Tooltip } from '@mui/material';
import proteinIcon from '@static/images/protein.png';
import fatIcon from '@static/images/fat.png';
import carbsIcon from '@static/images/carbs.png';

import classes from './style.module.scss';

const NutritionPopup = ({ open, onClose, user }) => (
  <Dialog className={classes.container} open={open} onClose={onClose}>
    <DialogTitle className={classes.header}>
      <div className={classes.header__title}>Welcome {user?.username}!</div>
      <div className={classes.header__subtitle}>Your Personalized Nutrition Plan</div>
    </DialogTitle>
    <DialogContent className={classes.content}>
      <div className={classes.message}>
        <div className={classes.message__content}>
          To <span>{user?.goal}</span> weight you need to consume
        </div>
        <span className={classes.calories}>
          <CountUp end={user?.bmr} duration={2} />
        </span>
        <div className={classes.message__kcal}>kcal/day</div>
      </div>
      <div className={classes.message2}>Your Daily Nutritional Goals</div>
      <div className={classes.macronutrient}>
        <div className={classes.macronutrient__item}>
          <Tooltip title="Protein">
            <img src={proteinIcon} alt="Protein" />
          </Tooltip>{' '}
          <CountUp end={user?.proteinIntake} duration={2} suffix="g" />
        </div>

        <div className={classes.macronutrient__item}>
          <Tooltip title="Carbohydrate">
            <img src={carbsIcon} alt="Carbs" />
          </Tooltip>{' '}
          <CountUp end={user?.carbsIntake} duration={2} suffix="g" />
        </div>

        <div className={classes.macronutrient__item}>
          <Tooltip title="Fat">
            <img src={fatIcon} alt="Fat" />
          </Tooltip>{' '}
          <CountUp end={user?.fatIntake} duration={2} suffix="g" />
        </div>
      </div>
      <div className={classes.button} onClick={onClose}>
        Got it
      </div>
    </DialogContent>
  </Dialog>
);

NutritionPopup.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  user: PropTypes.object,
};

export default NutritionPopup;
