import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="fixed top-0 left-0 w-20 lg:w-64 border-r border-primary/10 bg-white dark:bg-background-dark h-screen flex flex-col transition-all duration-300 z-50 flex-shrink-0">
            <div className="h-16 flex items-center px-6 border-b border-primary/5">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="material-icons-outlined text-white">waves</span>
                </div>
                <span className="ml-3 font-bold text-lg hidden lg:block tracking-tight">AquaTrade <span className="text-primary">AI</span></span>
            </div>
            <nav className="flex-1 py-6">
                <ul className="space-y-2">
                    <li>
                        <Link className="flex items-center px-6 py-3 sidebar-item-active text-primary" to="/">
                            <span className="material-icons-outlined">dashboard</span>
                            <span className="ml-4 font-medium hidden lg:block">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center px-6 py-3 text-slate-500 hover:text-primary transition-colors" to="/inventory">
                            <span className="material-icons-outlined">inventory_2</span>
                            <span className="ml-4 font-medium hidden lg:block">Inventory</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center px-6 py-3 text-slate-500 hover:text-primary transition-colors" to="/orders">
                            <span className="material-icons-outlined">shopping_bag</span>
                            <span className="ml-4 font-medium hidden lg:block">Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center px-6 py-3 text-slate-500 hover:text-primary transition-colors" to="/chat">
                            <span className="material-icons-outlined">chat_bubble_outline</span>
                            <span className="ml-4 font-medium hidden lg:block">AI Assistant</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center px-6 py-3 text-slate-500 hover:text-primary transition-colors" to="/ai-detection">
                            <span className="material-icons-outlined">analytics</span>
                            <span className="ml-4 font-medium hidden lg:block">Insights</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="p-6 mt-auto border-t border-primary/5">
                <Link className="flex items-center text-slate-500 hover:text-primary" to="#">
                    <span className="material-icons-outlined">settings</span>
                    <span className="ml-4 font-medium hidden lg:block">Account</span>
                </Link >
            </div>
        </aside>
    );
};

export default Sidebar;
