import React, { useState, MouseEvent, useRef, useEffect, FocusEvent } from "react";
import styles from "./customSelect.module.css";
import Image from "next/image";

const CustomSelect = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [language, setLanguage] = useState("Español");
  const navbarRef = useRef<HTMLDivElement>(null);


  const handleShowDropdown = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const handleLanguageChange = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setLanguage(language === "Español" ? "English" : "Español");
  };

 
 
  
    const handleClickOutside : EventListener = (e: Event) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  return (
    <div className={styles.container} >
      <nav className={styles.navContainer} ref={navbarRef}>
        <div>
          <button className={styles.languageBtn} onClick={handleShowDropdown} >
            <Image
              src="/static/icons/expand_more.svg"
              alt="Expand more"
              width={24}
              height={24}
            />
            <p className={styles.language}>{language}</p>
          </button>
          {showDropdown && (
            <div className={styles.navDropdown} >
              <div>
                <button
                  className={styles.linkName}
                  onClick={handleLanguageChange}
                >
                  {language === "English" ? "Español" : "English"}
                </button>
                <div className={styles.lineWrapper}></div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default CustomSelect;
