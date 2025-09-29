import { useState, useEffect } from 'react';
// типизация хука
type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  },
];

  // получить начальное значение из LocalStorage
  const getValue = (key: string): LocalStorageReturnValue => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (err) {
        console.error('Ошибка при получении значения из LocalStorage:', err);
        return null;
    }
  };


export const useLocalStorage: UseLocalStorage = (key: string) => {
    const [value, setValue] = useState(() => getValue(key));

  // установить значение в LocalStorage
  const setItem = (value: LocalStorageSetValue): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (err) {
      console.error('Ошибка при сохранении значения в LocalStorage:', err);
    }
  };

  // удалить значение из LocalStorage
  const removeItem = (): void => {
    try {
      localStorage.removeItem(key);
      setValue(null);
    } catch (err) {
      console.error('Ошибка при удалении значения из LocalStorage:', err);
    }
  };

  return [value, { setItem, removeItem }];
};

/*
import { useState } from 'react';

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  },
];

export const useLocalStorage: UseLocalStorage = key => {
  const [value, setValue] = useState<LocalStorageReturnValue>(() => localStorage.getItem(key));

  function setItem(value: LocalStorageSetValue) {
    setValue(value);
    localStorage.setItem(key, value);
  }

  function removeItem() {
    setValue(null);
    localStorage.removeItem(key);
  }

  return [
    value,
    {
      setItem,
      removeItem,
    },
  ];
};
*/