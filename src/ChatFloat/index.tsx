/* eslint-disable react/button-has-type */
/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-06-13 15:37:40
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-06-15 11:12:51
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM –
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license.
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE
 *  contact: 270580156@qq.com
 * 联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved.
 */
import React from 'react';
import { CSSProperties, useEffect, useState } from 'react';

export type ChatFloatProps = {
    chatUrl?: string;
    buttonPosition?: 'left' | 'right'; // 新增：按钮位置
    buttonBackgroundColor?: string; // 新增：按钮背景色
    iframeWidth?: number; // 新增：iframe宽度
    iframeHeight?: number; // 新增：iframe高度
    iframeMargins?: { // 新增：iframe边距
        right?: number;
        bottom?: number;
        left?: number;
    };
    buttonMargins?: { // 新增：按钮边距
        right?: number;
        bottom?: number;
        left?: number;
    };
    showButton?: boolean; // 新增：控制按钮的显示与隐藏
    showIframe?: boolean; // 新增：控制iframe的显示与隐藏
};

const ChatFloat = ({
    chatUrl = '/chat?t=1&sid=default_wg_uid&',
    buttonPosition = 'right', // 默认按钮在右边
    buttonBackgroundColor = 'blue', // 默认按钮背景色为蓝色
    iframeWidth = 400, // iframe默认宽度
    iframeHeight = 600, // iframe默认高度
    iframeMargins = { right: 20, bottom: 20, left: 20 }, // iframe默认边距
    buttonMargins = { right: 20, bottom: 20, left: 20 }, // 按钮默认边距
    showButton = true, // 默认显示按钮
    showIframe = true, // 默认显示iframe
}: ChatFloatProps) => {
    const [showFloatWindow, setShowFloatWindow] = useState(false);
    // const [containerHeight, setContainerHeight] = useState('0px'); // 新增状态用于控制容器高度
    const isMobileBrowser = () => {
        const userAgent = navigator.userAgent || navigator.vendor;
        console.log('userAgent:', userAgent);
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    };
    // 根据屏幕宽度判断是否是手机的函数
    const isMobileScreen = () => {
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        console.log('isMobileScreen:', width);
        // 通常手机屏幕宽度小于768px，可根据实际情况调整该值
        return width < 768;
    }
    // const isMobile = () => {
    //     return isMobileBrowser() || isMobileScreen();
    // }
    const isMobile = isMobileBrowser() || isMobileScreen();

    useEffect(() => {
        console.log('ChatFloat isMobileBrowser:', isMobileBrowser(), ' isMobileScreen:', isMobileScreen());
    }, [])

    const handleOpenFloatWindow = () => {
        setShowFloatWindow(true);
    };

    const handleCloseFloatWindow = () => {
        // 添加延迟以确保动画完成
        setTimeout(() => {
            setShowFloatWindow(false);
        }, 200);
    };

    // 根据位置调整按钮的样式
    const getButtonStyles = (): CSSProperties => ({
        position: 'fixed',
        [buttonPosition === 'right' ? 'right' : 'left']: [buttonPosition === 'right' ? buttonMargins.right + 'px' : buttonMargins.left + 'px'], // 动态设置左右边距
        bottom: buttonMargins.bottom + 'px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: buttonBackgroundColor, // 使用传入的背景色
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', // 添加阴影效果
        display: !showButton || showFloatWindow ? 'none' : 'block', // 根据showButton控制显示与隐藏
    });

    // 根据位置调整iframe容器的样式
    const getIframeContainerStyles = (): CSSProperties => ({
        position: 'fixed',
        [buttonPosition === 'right' ? 'right' : 'left']: isMobile ? '2px' : (buttonPosition === 'right' ? iframeMargins.right + 'px' : iframeMargins.left + 'px'), // 动态设置左右边距
        bottom: isMobile ? '0' : iframeMargins.bottom + 'px',
        width: isMobile ? '100%' : iframeWidth + 'px',
        height: isMobile ? '80vh' : iframeHeight + 'px',
        // backgroundColor: 'white',
        zIndex: 1000,
        borderRadius: '7px',
        boxShadow: isMobile ? 'none' : '5px 5px 10px 0px rgba(0,0,0,0.5)', // 添加阴影效果
        // FIXME: 关闭动画不起作用
        animation: showFloatWindow ? 'slideInFromBottom 0.2s ease-out forwards' : 'slideOutToBottom 0.5s ease-out forwards', // 添加动画
    });

    // CSS动画定义
    const animationStyles = `
        @keyframes slideInFromBottom {
            0% {
                transform: translateY(100%);
            }
            100% {
                transform: translateY(0);
            }
        }
        @keyframes slideOutToBottom {
            0% {
                transform: translateY(0);
            }
            100% {
                transform: translateY(100%);
            }
        }
    `;

    useEffect(() => {
        // ...之前的useEffect内容...

        // 将动画样式注入到head中（如果尚未注入）
        const styleElement = document.getElementById('slideInAnimation');
        if (!styleElement) {
            const newStyleElement = document.createElement('style');
            newStyleElement.id = 'slideInAnimation';
            newStyleElement.type = 'text/css';
            newStyleElement.innerHTML = animationStyles;
            document.head.appendChild(newStyleElement);
        }
    }, [animationStyles]); // 确保这个useEffect只在组件挂载时运行一次


    return (
        <div>
            {/* 圆形按钮，用于触发漂浮窗口的显示 */}
            {showButton && (
                <button onClick={handleOpenFloatWindow} style={getButtonStyles()}>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                        <path d="M512 64c259.2 0 469.333333 200.576 469.333333 448s-210.133333 448-469.333333 448a484.48 484.48 0 0 1-232.725333-58.88l-116.394667 50.645333a42.666667 42.666667 0 0 1-58.517333-49.002666l29.76-125.013334C76.629333 703.402667 42.666667 611.477333 42.666667 512 42.666667 264.576 252.8 64 512 64z m0 64C287.488 128 106.666667 300.586667 106.666667 512c0 79.573333 25.557333 155.434667 72.554666 219.285333l5.525334 7.317334 18.709333 24.192-26.965333 113.237333 105.984-46.08 27.477333 15.018667C370.858667 878.229333 439.978667 896 512 896c224.512 0 405.333333-172.586667 405.333333-384S736.512 128 512 128z m-157.696 341.333333a42.666667 42.666667 0 1 1 0 85.333334 42.666667 42.666667 0 0 1 0-85.333334z m159.018667 0a42.666667 42.666667 0 1 1 0 85.333334 42.666667 42.666667 0 0 1 0-85.333334z m158.997333 0a42.666667 42.666667 0 1 1 0 85.333334 42.666667 42.666667 0 0 1 0-85.333334z" fill="#ffffff"></path>
                    </svg>
                </button>
            )}
            {/* 漂浮窗口，包含iframe和关闭按钮 */}
            {showFloatWindow && showIframe && (
                <div style={getIframeContainerStyles()}>
                    {/* 嵌入的iframe */}
                    <iframe
                        src={`${chatUrl}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderWidth: '2px',
                            borderColor: '#ddd',
                            borderStyle: 'solid',
                            borderRadius: '5px',
                        }}
                    />
                    {/* 关闭按钮，位于漂浮窗口的右上角 */}
                    <button
                        onClick={handleCloseFloatWindow}
                        style={{
                            position: 'absolute',
                            right: '10px',
                            top: '10px',
                            padding: '5px',
                            backgroundColor: 'gray',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            borderRadius: '10%',
                        }}
                    >
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                            <path d="M892.48 138.24a32 32 0 0 1 0 45.248L556.416 519.530667l328.533333 328.533333a32 32 0 0 1-45.269333 45.226667L511.168 564.8 183.488 892.48a32 32 0 0 1-45.248-45.248l327.68-327.701333L130.688 184.32a32 32 0 0 1 45.269333-45.269333L511.146667 474.282667 847.232 138.24a32 32 0 0 1 45.248 0z" fill="#ffffff"></path>
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default ChatFloat;