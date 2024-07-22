import { useState } from "react";

function FloatingButton({styles}) {
  const buttonList = [
    {id: "Cbtn", text: "C" ,onClick:cBtnClick},
    {id: "Rbtn", text: "R" ,onClick:rBtnClick},
    {id: "Ubtn", text: "U" ,onClick:uBtnClick},
    {id: "Dbtn", text: "D" ,onClick:dBtnClick}
  ];
  const [isOpen, setIsOpen] = useState(false);

  function cBtnClick() {
    console.log("C버튼 클릭");
  }

  function rBtnClick() {
    console.log("R버튼 클릭");
  }

  function uBtnClick() {
    console.log("U버튼 클릭");
  }

  function dBtnClick() {
    console.log("D버튼 클릭");
  }

  function getButtonClassName(index) {
    // isOpen 상태에 따라 bottom 스타일 동적으로 설정
    const bottomValue = isOpen ? `${(index+2) * 55}px` : '50px';
    return {
      bottom: bottomValue
    };
  }

  function handleOnOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      {buttonList.map((button,index) => (
        <button key={index} id={button.id} className={styles.floatingButton} style={getButtonClassName(index)} onClick={button.onClick}
        >{button.text}</button>
      ))
      }
      <button id="Mbtn" onClick={handleOnOpen} className={styles.floatingButton}>{isOpen ? '-' : '+'}
      </button>
    </div>
  );
}

export default FloatingButton;