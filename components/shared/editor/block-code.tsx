import React from 'react';
import Link from 'next/link';

interface BlockCodeProps {
  language?: string;
  title?: string;
  code: {
    [key: string]: string | number | boolean | (() => boolean) | object;
  };
  theme?: {
    background?: string;
    text?: string;
    keyword?: string;
    variable?: string;
    string?: string;
    number?: string;
    boolean?: string;
    function?: string;
    operator?: string;
    comment?: string;
  };
}

const BlockCode: React.FC<BlockCodeProps> = ({
  language = 'javascript',
  title = 'Code Editor',
  code,
  theme = {
    background: 'bg-gradient-to-r from-blue-750 to-indigo-900',
    text: 'text-white',
    keyword: 'text-pink-500',
    variable: 'text-white',
    string: 'text-amber-300',
    number: 'text-orange-400',
    boolean: 'text-orange-400',
    function: 'text-orange-400',
    operator: 'text-amber-300',
    comment: 'text-gray-400',
  },
}) => {
  const renderCodeLine = (key: string, value: string | number | boolean | (() => boolean) | object, indent: number = 0) => {
    const indentation = '  '.repeat(indent);
    if (typeof value === 'function') {
      return (
        <div key={key}>
          <span className={`${theme.variable} ml-${indent * 8} mr-2`}>{key}:</span>
          <span className={theme.function}>function</span>
          <span className={theme.comment}>{' () {'}</span>
          {renderCodeLine('return', value(), indent + 1)}
          <span className={`${theme.comment} ml-${indent * 8}`}>{'}'}</span>
        </div>
      );
    }
    if (typeof value === 'object' && value !== null) {
      return (
        <div key={key}>
          <span className={`${theme.variable} ml-${indent * 8} mr-2`}>{key}:</span>
          <span className={theme.comment}>{'{'}</span>
          {Object.entries(value).map(([k, v]) => renderCodeLine(k, v as string | number | boolean | (() => boolean) | object, indent + 1))}
          <span className={`${theme.comment} ml-${indent * 8}`}>{'}'}</span>
        </div>
      );
    }
    return (
      <div key={key}>
        <span className={`${theme.variable} ml-${indent * 8} mr-2`}>{key}:</span>
        {typeof value === 'string' && value.startsWith('http') ? (
          <Link href={value} className={theme.string} target='_blank'>
            <span className={theme.comment}>'</span>
            {value}
            <span className={theme.comment}>'</span>
          </Link>
        ) : typeof value === 'string' ? (
          <>
            <span className={theme.comment}>'</span>
            <span className={theme.string}>{value}</span>
            <span className={theme.comment}>'</span>
          </>
        ) : (
          <span className={typeof value === 'boolean' ? theme.boolean : theme.number}>{value.toString()}</span>
        )}
        <span className={theme.comment}>,</span>
      </div>
    );
  };

  return (
    <div className={`${theme.background} rounded-lg select-none relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-600 opacity-10"></div>
      <div className="relative p-[1px]">
        <div className={`${theme.background} rounded-lg`}>
          <div className="flex flex-row">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full"></div>
            <div className="h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full"></div>
          </div>
          <div className="px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="rounded-full bg-red-400 w-3 h-3"></div>
              <div className="rounded-full bg-orange-400 w-3 h-3"></div>
              <div className="rounded-full bg-green-200 w-3 h-3"></div>
            </div>
          </div>
          <div className="px-8 py-8 border-t-[2px] border-indigo-900">
            <code className="font-mono">
              <div className="blink">
                <span className={theme.keyword}>const</span>
                <span className={`${theme.variable} mr-2`}> {title} </span>
                <span className={theme.keyword}>=</span>
                <span className={theme.comment}> {'{'}</span>
              </div>
              {Object.entries(code).map(([key, value]) => renderCodeLine(key, value, 1))}
              <div>
                <span className={theme.comment}>{'}'}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockCode;
