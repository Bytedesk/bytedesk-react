/* eslint-disable react/button-has-type */
/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-06-13 17:56:29
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-06-13 18:02:40
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
import { useState } from 'react';

export type ChatFloatProps = {
    path?: string;
    t?: string;
    sid?: string;
};

const ChatFloat = ({ path = '/chat', t = '1', sid = 'default_wg_uid' }: ChatFloatProps) => {
    const [showFloatWindow, setShowFloatWindow] = useState(false);

    const handleOpenFloatWindow = () => {
        setShowFloatWindow(true);
    };

    const handleCloseFloatWindow = () => {
        setShowFloatWindow(false);
    };

    return (
        <div>
            {/* 圆形按钮，用于触发漂浮窗口的显示 */}
            <button
                onClick={handleOpenFloatWindow}
                style={{
                    position: 'fixed',
                    right: '20px',
                    bottom: '20px',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'blue',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    display: showFloatWindow ? 'none' : 'block',
                    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', // 添加阴影效果
                }}
            >
                Chat
            </button>
            {/* 漂浮窗口，包含iframe和关闭按钮 */}
            {showFloatWindow && (
                <div
                    style={{
                        position: 'fixed',
                        right: '20px',
                        bottom: '0', // 紧贴窗口底部
                        width: '400px', // 宽度800
                        height: '630px', // 高度调整为630以容纳关闭按钮
                        backgroundColor: 'white',
                        zIndex: 1000,
                    }}
                >
                    {/* 嵌入的iframe */}
                    <iframe
                        src={`${path}?t=${t}&sid=${sid}&`} // 替换为您想要嵌入的网页地址
                        style={{
                            width: '100%',
                            height: '600px', // 高度600，留出空间给关闭按钮
                            borderWidth: '2px', // 增加边框宽度到5像素
                            borderColor: '#ddd', // 更改边框颜色为蓝色，你可以根据需要选择其他颜色
                            borderStyle: 'solid', // 边框样式设置为实线，也可以选择其他样式如dashed、dotted等
                            borderRadius: '2%', // 添加这行来设置圆角
                        }}
                    />
                    {/* 关闭按钮，位于漂浮窗口的右上角 */}
                    <button
                        onClick={handleCloseFloatWindow}
                        style={{
                            position: 'absolute',
                            right: '10px', // 可根据需要调整距离右边的距离
                            top: '10px', // 可调整为距离顶部合适的位置，确保在iframe上方
                            padding: '5px',
                            backgroundColor: 'gray',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            borderRadius: '10%', // 添加这行来设置圆角
                        }}
                    >
                        X
                    </button>
                </div>
            )}
        </div>
    );
};

export default ChatFloat;