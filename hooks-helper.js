export const handleState = (setter, objectName, property) => {
  return event => {
    if (event?.nativeEvent?.text !== undefined) {
      setter({...objectName, [property]: event.nativeEvent.text});
    } else if (event?.nativeEvent?.selectedSegmentIndex !== undefined) {
      setter({
        ...objectName,
        [property]: event.nativeEvent.selectedSegmentIndex,
      });
    } else if (event?.nativeEvent?.value !== undefined) {
      if (event.target.type === 'checkbox') {
        return customValue === '!'
          ? setter({...objectName, [property]: !event.nativeEvent.value})
          : setter({...objectName, [property]: event.nativeEvent.value});
      } else if (event.target.type === 'radio') {
        setter({...objectName, [property]: event.nativeEvent.value});
      }
      // Add other form element handling here if needed
    } else if (customValue === 'code') {
      setter({...objectName, [property]: event.code});
    } else {
      setter({...objectName, [property]: event});
    }
  };
};
