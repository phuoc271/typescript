import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Products[] = [
    {
      productId: 1,
      productloai: 1, incart: 1,
      productName: 'Nhẫn Bạc S925 Bromeliads Helios Silver Original',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2016',
      description:
        'Chế tác này lấy cảm hứng từ vị Tổng lãnh Thiên thần Michael trong Kinh Thánh, với biểu tượng chủ đạo là một thiên thần chiến binh bản lĩnh trước ác quỷ. Hai bên đai nhẫn khắc họa hai hình ảnh đối lập Thánh Michael và Quỷ Satan, đại diện cho hai ý niệm Thiện và Ác, và cuộc đấu tranh không ngừng giữa chúng. Mỗi con người không chỉ cần đối mặt với những thách thức từ bên ngoài mà còn phải không ngừng kiểm soát cám dỗ từ chính bản thân mình, duy trì trật tự cân bằng trong cuộc sống.',
      price: 300000,
      starRating: 3.2,
      imageUrl:
        '../assets/imagenhan/17.png',
    },
    {
      productId: 2,
      productloai: 1, incart: 1,
      productName: 'Nhẫn Bạc S925 Lianas Helios Silver Original',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2016',
      description:
        'Chế tác này lấy cảm hứng từ vị Tổng lãnh Thiên thần Michael trong Kinh Thánh, với biểu tượng chủ đạo là một thiên thần chiến binh bản lĩnh trước ác quỷ. Hai bên đai nhẫn khắc họa hai hình ảnh đối lập Thánh Michael và Quỷ Satan, đại diện cho hai ý niệm Thiện và Ác, và cuộc đấu tranh không ngừng giữa chúng. Mỗi con người không chỉ cần đối mặt với những thách thức từ bên ngoài mà còn phải không ngừng kiểm soát cám dỗ từ chính bản thân mình, duy trì trật tự cân bằng trong cuộc sống.',
      price: 300000,
      starRating: 4.2,
      imageUrl:
        '../assets/imagenhan/18.png',
    },
    {
      productId: 5,
      productloai: 1, incart: 1,
      productName: 'Nhẫn Bạc S925 Roots Green Helios Silver Original',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2016',
      description:
        'Chế tác này lấy cảm hứng từ vị Tổng lãnh Thiên thần Michael trong Kinh Thánh, với biểu tượng chủ đạo là một thiên thần chiến binh bản lĩnh trước ác quỷ. Hai bên đai nhẫn khắc họa hai hình ảnh đối lập Thánh Michael và Quỷ Satan, đại diện cho hai ý niệm Thiện và Ác, và cuộc đấu tranh không ngừng giữa chúng. Mỗi con người không chỉ cần đối mặt với những thách thức từ bên ngoài mà còn phải không ngừng kiểm soát cám dỗ từ chính bản thân mình, duy trì trật tự cân bằng trong cuộc sống.',
      price: 300000,
      starRating: 4.8,
      imageUrl:
        '../assets/imagenhan/19.png',
    },
    {
      productId: 8,
      productloai: 1, incart: 1,
      productName: 'Nhẫn Bạc S925 Angelim Helios Silver Original',
      productCode: 'TBX-0022',
      releaseDate: 'May 15, 2016',
      description:
        'Chế tác này lấy cảm hứng từ vị Tổng lãnh Thiên thần Michael trong Kinh Thánh, với biểu tượng chủ đạo là một thiên thần chiến binh bản lĩnh trước ác quỷ. Hai bên đai nhẫn khắc họa hai hình ảnh đối lập Thánh Michael và Quỷ Satan, đại diện cho hai ý niệm Thiện và Ác, và cuộc đấu tranh không ngừng giữa chúng. Mỗi con người không chỉ cần đối mặt với những thách thức từ bên ngoài mà còn phải không ngừng kiểm soát cám dỗ từ chính bản thân mình, duy trì trật tự cân bằng trong cuộc sống.',
      price: 300000,
      starRating: 3.7,
      imageUrl:
        '../assets/imagenhan/20.png',
    },
    {
      productId: 10,
      productloai: 1, incart: 1,
      productName: 'Nhẫn Bạc S925 Bough Helios Silver Original',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description:
        'Chế tác này lấy cảm hứng từ vị Tổng lãnh Thiên thần Michael trong Kinh Thánh, với biểu tượng chủ đạo là một thiên thần chiến binh bản lĩnh trước ác quỷ. Hai bên đai nhẫn khắc họa hai hình ảnh đối lập Thánh Michael và Quỷ Satan, đại diện cho hai ý niệm Thiện và Ác, và cuộc đấu tranh không ngừng giữa chúng. Mỗi con người không chỉ cần đối mặt với những thách thức từ bên ngoài mà còn phải không ngừng kiểm soát cám dỗ từ chính bản thân mình, duy trì trật tự cân bằng trong cuộc sống.',
      price: 300000,
      starRating: 4.6,
      imageUrl:
        '../assets/imagenhan/21.png',
    },
    {
      productId: 100,
      productloai: 2, incart: 1,
      productName: 'Mặt Dây Chuyền Bạc S925 Orientate Helios Silver Original DCB',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description:
        'Chế tác này lấy cảm hứng từ vị Tổng lãnh Thiên thần Michael trong Kinh Thánh, với biểu tượng chủ đạo là một thiên thần chiến binh bản lĩnh trước ác quỷ. Hai bên đai nhẫn khắc họa hai hình ảnh đối lập Thánh Michael và Quỷ Satan, đại diện cho hai ý niệm Thiện và Ác, và cuộc đấu tranh không ngừng giữa chúng. Mỗi con người không chỉ cần đối mặt với những thách thức từ bên ngoài mà còn phải không ngừng kiểm soát cám dỗ từ chính bản thân mình, duy trì trật tự cân bằng trong cuộc sống.',
      price: 280000,
      starRating: 4.6,
      imageUrl:
        '../assets/imagenhan/25.png',
    },
    {
      productId: 100,
      productloai: 2, incart: 1,
      productName: 'Dây chuyền nam Helios Sao David - Bạc Sáng DCN048',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description:
        'Chế tác này lấy cảm hứng từ vị Tổng lãnh Thiên thần Michael trong Kinh Thánh, với biểu tượng chủ đạo là một thiên thần chiến binh bản lĩnh trước ác quỷ. Hai bên đai nhẫn khắc họa hai hình ảnh đối lập Thánh Michael và Quỷ Satan, đại diện cho hai ý niệm Thiện và Ác, và cuộc đấu tranh không ngừng giữa chúng. Mỗi con người không chỉ cần đối mặt với những thách thức từ bên ngoài mà còn phải không ngừng kiểm soát cám dỗ từ chính bản thân mình, duy trì trật tự cân bằng trong cuộc sống.',
      price: 280000,
      starRating: 4.6,
      imageUrl:
        '../assets/imagenhan/26.png',
    },
    {
      productId: 100,
      productloai: 2, incart: 1,
      productName: 'Dây chuyền nam, nữ Helios Onyx Pyramid',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description:
        'Chế tác này lấy cảm hứng từ vị Tổng lãnh Thiên thần Michael trong Kinh Thánh, với biểu tượng chủ đạo là một thiên thần chiến binh bản lĩnh trước ác quỷ. Hai bên đai nhẫn khắc họa hai hình ảnh đối lập Thánh Michael và Quỷ Satan, đại diện cho hai ý niệm Thiện và Ác, và cuộc đấu tranh không ngừng giữa chúng. Mỗi con người không chỉ cần đối mặt với những thách thức từ bên ngoài mà còn phải không ngừng kiểm soát cám dỗ từ chính bản thân mình, duy trì trật tự cân bằng trong cuộc sống.',
      price: 280000,
      starRating: 4.6,
      imageUrl:
        '../assets/imagenhan/27.png',
    },
    {
      productId: 100,
      productloai: 2, incart: 1,
      productName: 'Dây chuyền nam, nữ Helios Laurel Gem Stone DCN227',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description:
        'Chế tác này lấy cảm hứng từ vị Tổng lãnh Thiên thần Michael trong Kinh Thánh, với biểu tượng chủ đạo là một thiên thần chiến binh bản lĩnh trước ác quỷ. Hai bên đai nhẫn khắc họa hai hình ảnh đối lập Thánh Michael và Quỷ Satan, đại diện cho hai ý niệm Thiện và Ác, và cuộc đấu tranh không ngừng giữa chúng. Mỗi con người không chỉ cần đối mặt với những thách thức từ bên ngoài mà còn phải không ngừng kiểm soát cám dỗ từ chính bản thân mình, duy trì trật tự cân bằng trong cuộc sống.',
      price: 280000,
      starRating: 4.6,
      imageUrl:
        '../assets/imagenhan/28.png',
    },
    {
      productId: 100,
      productloai: 3, incart: 1,
      productName: 'Khuyên Tai Bạc S925 Devils Piercing Helios Silver Original',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description:
        'Chế tác này lấy cảm hứng từ vị Tổng lãnh Thiên thần Michael trong Kinh Thánh, với biểu tượng chủ đạo là một thiên thần chiến binh bản lĩnh trước ác quỷ. Hai bên đai nhẫn khắc họa hai hình ảnh đối lập Thánh Michael và Quỷ Satan, đại diện cho hai ý niệm Thiện và Ác, và cuộc đấu tranh không ngừng giữa chúng. Mỗi con người không chỉ cần đối mặt với những thách thức từ bên ngoài mà còn phải không ngừng kiểm soát cám dỗ từ chính bản thân mình, duy trì trật tự cân bằng trong cuộc sống.',
      price: 150000,
      starRating: 4.6,
      imageUrl:
        '../assets/imagenhan/31.png',
    },
    {
      productId: 100,
      productloai: 3, incart: 1,
      productName: 'Khuyên Tai Bạc S925 Kê Túc Helios Silver Original',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description:
        'Chế tác này lấy cảm hứng từ vị Tổng lãnh Thiên thần Michael trong Kinh Thánh, với biểu tượng chủ đạo là một thiên thần chiến binh bản lĩnh trước ác quỷ. Hai bên đai nhẫn khắc họa hai hình ảnh đối lập Thánh Michael và Quỷ Satan, đại diện cho hai ý niệm Thiện và Ác, và cuộc đấu tranh không ngừng giữa chúng. Mỗi con người không chỉ cần đối mặt với những thách thức từ bên ngoài mà còn phải không ngừng kiểm soát cám dỗ từ chính bản thân mình, duy trì trật tự cân bằng trong cuộc sống.',
      price: 150000,
      starRating: 4.6,
      imageUrl:
        '../assets/imagenhan/32.png',
    },
    {
      productId: 100,
      productloai: 3, incart: 1,
      productName: 'Khuyên Tai Bạc S925 Phi Thuyền Frieza Duong Minh Hai x Helio',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description:
        'Chế tác này lấy cảm hứng từ vị Tổng lãnh Thiên thần Michael trong Kinh Thánh, với biểu tượng chủ đạo là một thiên thần chiến binh bản lĩnh trước ác quỷ. Hai bên đai nhẫn khắc họa hai hình ảnh đối lập Thánh Michael và Quỷ Satan, đại diện cho hai ý niệm Thiện và Ác, và cuộc đấu tranh không ngừng giữa chúng. Mỗi con người không chỉ cần đối mặt với những thách thức từ bên ngoài mà còn phải không ngừng kiểm soát cám dỗ từ chính bản thân mình, duy trì trật tự cân bằng trong cuộc sống.',
      price: 150000,
      starRating: 4.6,
      imageUrl:
        '../assets/imagenhan/33.png',
    },
    {
      productId: 100,
      productloai: 3, incart: 1,
      productName: 'Khuyên Tai Bạc S925 Double Standard Helios Silver Original',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description:
        'Chế tác này lấy cảm hứng từ vị Tổng lãnh Thiên thần Michael trong Kinh Thánh, với biểu tượng chủ đạo là một thiên thần chiến binh bản lĩnh trước ác quỷ. Hai bên đai nhẫn khắc họa hai hình ảnh đối lập Thánh Michael và Quỷ Satan, đại diện cho hai ý niệm Thiện và Ác, và cuộc đấu tranh không ngừng giữa chúng. Mỗi con người không chỉ cần đối mặt với những thách thức từ bên ngoài mà còn phải không ngừng kiểm soát cám dỗ từ chính bản thân mình, duy trì trật tự cân bằng trong cuộc sống.',
      price: 150000,
      starRating: 4.6,
      imageUrl:
        '../assets/imagenhan/34.png',
    },
    {
      productId: 100,
      productloai: 4, incart: 1,
      productName: 'Vòng tay Handmade Helios',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description:
        'Chế tác này lấy cảm hứng từ vị Tổng lãnh Thiên thần Michael trong Kinh Thánh, với biểu tượng chủ đạo là một thiên thần chiến binh bản lĩnh trước ác quỷ. Hai bên đai nhẫn khắc họa hai hình ảnh đối lập Thánh Michael và Quỷ Satan, đại diện cho hai ý niệm Thiện và Ác, và cuộc đấu tranh không ngừng giữa chúng. Mỗi con người không chỉ cần đối mặt với những thách thức từ bên ngoài mà còn phải không ngừng kiểm soát cám dỗ từ chính bản thân mình, duy trì trật tự cân bằng trong cuộc sống.',
      price: 270000,
      starRating: 4.6,
      imageUrl:
        '../assets/imagenhan/35.png',
    },
    {
      productId: 100,
      productloai: 4, incart: 1,
      productName: 'Vòng Tay Bạc S925 POWERFUL WHEEL Helios Silver Original',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description:
        'Chế tác này lấy cảm hứng từ vị Tổng lãnh Thiên thần Michael trong Kinh Thánh, với biểu tượng chủ đạo là một thiên thần chiến binh bản lĩnh trước ác quỷ. Hai bên đai nhẫn khắc họa hai hình ảnh đối lập Thánh Michael và Quỷ Satan, đại diện cho hai ý niệm Thiện và Ác, và cuộc đấu tranh không ngừng giữa chúng. Mỗi con người không chỉ cần đối mặt với những thách thức từ bên ngoài mà còn phải không ngừng kiểm soát cám dỗ từ chính bản thân mình, duy trì trật tự cân bằng trong cuộc sống.',
      price: 270000,
      starRating: 4.6,
      imageUrl:
        '../assets/imagenhan/36.png',
    },
    {
      productId: 100,
      productloai: 4, incart: 1,
      productName: 'Vòng Tay Bạc S925 Lotus x Tramhuong Helios Silver Original',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description:
        'Chế tác này lấy cảm hứng từ vị Tổng lãnh Thiên thần Michael trong Kinh Thánh, với biểu tượng chủ đạo là một thiên thần chiến binh bản lĩnh trước ác quỷ. Hai bên đai nhẫn khắc họa hai hình ảnh đối lập Thánh Michael và Quỷ Satan, đại diện cho hai ý niệm Thiện và Ác, và cuộc đấu tranh không ngừng giữa chúng. Mỗi con người không chỉ cần đối mặt với những thách thức từ bên ngoài mà còn phải không ngừng kiểm soát cám dỗ từ chính bản thân mình, duy trì trật tự cân bằng trong cuộc sống.',
      price: 270000,
      starRating: 4.6,
      imageUrl:
        '../assets/imagenhan/37.png',
    },
    {
      productId: 100,
      productloai: 4, incart: 1,
      productName: 'Vòng tay Kim Cô, Như Ý Helios Kim cô bạc cổ cao cấp VTWK0014',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description:
        'Chế tác này lấy cảm hứng từ vị Tổng lãnh Thiên thần Michael trong Kinh Thánh, với biểu tượng chủ đạo là một thiên thần chiến binh bản lĩnh trước ác quỷ. Hai bên đai nhẫn khắc họa hai hình ảnh đối lập Thánh Michael và Quỷ Satan, đại diện cho hai ý niệm Thiện và Ác, và cuộc đấu tranh không ngừng giữa chúng. Mỗi con người không chỉ cần đối mặt với những thách thức từ bên ngoài mà còn phải không ngừng kiểm soát cám dỗ từ chính bản thân mình, duy trì trật tự cân bằng trong cuộc sống.',
      price: 270000,
      starRating: 4.6,
      imageUrl:
        '../assets/imagenhan/38.png',
    },
  ];

  constructor() { }

  getProduct() {
    return this.products;
  }

  teo() { }

  AutoId() {
    var max = 1;
    this.products.forEach((item) => {
      if (item.productId > max) {
        max = item.productId;
      }
    });
    return max + 1;
  }

  getProductId(id: number) {
    return this.products.find((item) => item.productId == id);
  }
  getProductloai(loai: number) {
    return this.products.filter((item) => item.productloai == loai);
  }

  AddProduct(frmProduct: any, fileImg: string) {
    let id = this.products.push(frmProduct) - 1;
    this.products[id].imageUrl = fileImg;
    console.log(this.products);
  }

  EditProduct(id: number) {
    return this.products[id];
  }

  UpdateProduct(id: number, frmProduct: any, fileImg: string) {
    this.products[id].productName = frmProduct.productName;
    this.products[id].productCode = frmProduct.productCode;
    this.products[id].releaseDate = frmProduct.releaseDate;
    this.products[id].description = frmProduct.description;
    this.products[id].price = frmProduct.price;
    this.products[id].imageUrl = frmProduct.imageUrl;
  }

  DeleteProduct(id: number) {
    this.products.splice(id, 1);
  }
  cart: any[] = []
  searching: string = ''
  tongtien: number = 0
  addCart(item: any) {
    var flag = false;
    if (this.cart.length == 0) {
      flag = false;
    }
    else {
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id == item.id) {
          flag = true;
        }
      }
    }
    if (flag == false) {
      this.cart.push(item);
    }
    else {
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id == item.id) {
          this.cart[i].incart++;
        }
      }
    }
  }
  filterName() {
    if (this.searching == null) {
      return this.products;
    }
    else {
      if (this.searching) {
        //có{console.log(this.searching);
        console.log(this.searching.toUpperCase().split(' '));
        return this.products.filter((item) => {
          return (this.searching).toUpperCase().split(' ').every(v =>
            item.productName.toUpperCase().includes(v));
        })
      }
      else {
        return this.products;
      }
    }

  }
  itemcount() {
    var sum = 0
    this.cart.forEach(function (item) {
      sum += item.incart;
    })
    return sum;
  }
  increment(item: any) {
    item.incart++;
    return item.incart;
  }
  Delete(index: number) {
    this.cart.splice(index, 1);
  }
  decrement(item: any) {
    item.incart--;
    return item.incart;
  }
  DeleteAll() {
    this.cart = [];
  }
  sumTotal() {
    var sum = 0
    this.cart.forEach(function (item) {
      sum += item.incart * item.price;
    })
    return sum;
  }
}
