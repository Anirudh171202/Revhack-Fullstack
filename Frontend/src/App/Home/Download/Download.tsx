import React from "react";

interface DownloadProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  className: string;
  link: string;
}

function Download({ className, link, ...props }: DownloadProps) {
  return (
    <a {...props} target="_blank" className={className} href={`/${link}`}>
      Download
    </a>
  );
}

export default Download;
