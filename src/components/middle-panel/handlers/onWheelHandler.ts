const onWheelHanlder = (
  event: WheelEvent,
  element: any,
  scale: { value: number }
) => {
  const scaleMultiplier = 0.001;
  const minScale = 0.5;
  const maxScale = 1.2;
  const newScale = Number(scale.value + event.deltaY * scaleMultiplier);

  if (newScale >= minScale && newScale <= maxScale) {
    element.style.transform = `scale(${newScale})`;
    scale.value = newScale;
  }
};

export { onWheelHanlder };
