import React from 'react';

import {SearchIcon} from './icons/SearchIcon';

export type ButtonTranslations = Partial<{
  buttonText: string;
  buttonAriaLabel: string;
}>;

export type DocSearchButtonProps = React.ComponentProps<'button'> & {
  translations?: ButtonTranslations;
};

export const DocSearchButton = React.forwardRef<
  HTMLButtonElement,
  DocSearchButtonProps
>(({ translations = {}, ...props }, ref) => {
  const { buttonText = 'Search', buttonAriaLabel = 'Search' } = translations;

  return (
    <button
      type="button"
      className="DocSearch DocSearch-Button"
      aria-label={buttonAriaLabel}
      {...props}
      ref={ref}
    >
      <span className="DocSearch-Button-Container">
        <SearchIcon />
        <span className="DocSearch-Button-Placeholder">{buttonText}</span>
      </span>
    </button>
  );
});
