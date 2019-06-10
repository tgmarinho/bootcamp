import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CategoriesActions from '~/store/ducks/categories';
import ProductsByCategoryActions from '~/store/ducks/productsByCategory';

import {
  Container,
  ProductsList,
  Product,
  Image,
  Name,
  Brand,
  Price,
  Categories,
  CategoryButton,
  CategoryLabel,
} from './styles';

class Home extends Component {
  static navigationOptions = {
    title: 'GoCommerce',
    headerTintColor: '#ee7777',
    headerTitleStyle: { alignSelf: 'center' },
  };

  state = {
    categorySelected: 1,
  };

  componentDidMount() {
    console.tron.log(this.props);
    const { loadCategoryRequest, loadProductsByCategoryRequest } = this.props;
    loadCategoryRequest();
    loadProductsByCategoryRequest(1);
  }

  handleClick = (id) => {
    this.setState({ categorySelected: id });
    const { loadCategoryRequest, loadProductsByCategoryRequest } = this.props;
    loadProductsByCategoryRequest(id);
  };

  render() {
    const {
      categories,
      productsByCategory,
      navigation,
      loadProductsByCategoryRequest,
    } = this.props;
    const { categorySelected } = this.state;

    return (
      <Container>
        <Categories>
          {categories.data.map(category => (
            <CategoryButton
              key={category.id}
              onPress={() => this.handleClick(category.id)}
              active={categorySelected === category.id}
            >
              <CategoryLabel active={categorySelected === category.id}>
                {category.title}
              </CategoryLabel>
            </CategoryButton>
          ))}
        </Categories>
        <ProductsList
          data={productsByCategory.length > 0 ? productsByCategory : []}
          keyExtractor={product => String(product.id)}
          renderItem={({ item: product }) => (
            <Product onPress={() => navigation.navigate('ProductDetail', { product })}>
              <Image source={{ uri: product.image }} />
              <Name>{product.name}</Name>
              <Brand>{product.brand}</Brand>
              <Price>{product.price}</Price>
            </Product>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  productsByCategory: state.productsByCategory.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ProductsByCategoryActions, ...CategoriesActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Home));
