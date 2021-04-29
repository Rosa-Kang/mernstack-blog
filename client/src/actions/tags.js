import EventBus from './EventBus';

const defaultTagField = {
  type: '',
  temperature: '',
  flight: '',
};

const getPlacesByTags = async tagsToQuery => {
  try {
    let query = db.collection('places').where('visited', '==', 'No');

    for (const key in tagsToQuery) {
      const value = tagsToQuery[key];
      if (value) {
        query = query.where(`tags.${key}`, '==', value);
      }
    } 
  }
}

export {
  EventBus,
  defaultTagField,
  getPlacesByTags,
};

