import api from '../configs/apis';
import { genTokenContract } from './helper';

/**
 * LibraryBorrow
 */

export interface ICOutputLibraryBorrow {
  info: Array<{ // 当前借阅
    title: string; // 图书名
    author: string; // 图书作者
    borrowDate: string; // (xxxx-yy-zz)	借阅时间
    backDate: string; // 应还时间
    borrowCnt: string; // 续借次数
    site: string; // 借书地址
  }>;
  history: Array<{ // 历史借阅
    title: string; // 图书名
    author: string; // 图书作者
    borrowDate: string; // (xxxx-yy-zz)	借阅时间
    backDate: string; // 还书时间
    barCode: string; // bar_code
    bookUrl: string; // 在山东理工大学图书馆网站中的链接
    site: string; // 借书地址
  }>;
}

export const contractLibraryBorrow = genTokenContract<undefined, ICOutputLibraryBorrow>(api.libraryBorrow);
