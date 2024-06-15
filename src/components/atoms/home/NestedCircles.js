function NestedCircles() {
  return (
    <div className="absolute hidden md:block w-fit translate-y-2/4 bottom-0 left-0 right-0 mx-auto">
      <div className="circle circle--lg circle--lg__animation">
        <div className="circle circle--md circle--md__animation">
          <div className="circle circle--sm circle--sm__animation"></div>
        </div>
      </div>
    </div>
  );
}

export default NestedCircles;
