import { Component } from "react";
import Storeaction from "../../../Store/storeaction";
import { NameUI } from "../../StatelessUI/nameUI/nameUI";
import { List, Avatar, Button, Skeleton } from 'antd';
import { getFakeData } from "../../../Service/api";
import Img from '../../../Asset/img/头像9.png'
import Yuan from '../../../Asset/img/元宝.png'

import './nameComponent.css'

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
class NameComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initLoading: true,
            loading: false,
            data: [],
            list: [],
        }
    }
    componentDidMount() {
        this.getData(res => {
            this.setState({
                initLoading: false,
                data: res,
                list: res,
            });
        });
    }

    // 随机数据接口
    async getData(callBack) {
        let data = await getFakeData({
            results: '6',
            inc: 'name,gender,email,nat',
            noinfo: ''
        });
        callBack(data);
    }

    // 增加数据
    onLoadMore = () => {
        this.setState({
            loading: true,
            list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
        });
        this.getData(res => {
            const data = this.state.data.concat(res);
            this.setState(
                {
                    data,
                    list: data,
                    loading: false,
                },
                () => {
                    window.dispatchEvent(new Event('resize'));
                },
            );
        });
    };

    render() {
        const data = this.props.nameStatistical
        const { initLoading, loading, list } = this.state;
        const loadMore =
            !initLoading && !loading ? (
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: 12,
                        height: 32,
                        lineHeight: '32px',
                    }}
                >
                    <Button onClick={this.onLoadMore}>loading more</Button>
                </div>
            ) : null;
        return (
            <div className="NameComponent">
                <NameUI dataList={data} />
                <div style={{ marginTop: '10px' }}>
                    <List
                        className="demo-loadmore-list"
                        loading={initLoading}
                        itemLayout="horizontal"
                        loadMore={loadMore}
                        dataSource={list}
                        renderItem={item => (
                            <List.Item>
                                <Skeleton avatar title={false} loading={item.loading} active>
                                    <List.Item.Meta
                                        avatar={
                                            <Avatar src={Img} />
                                        }
                                        title={<span>{item.name.last}</span>}
                                        description="If you think of a handsome name, please call me!"
                                    />
                                    <img src={Yuan} style={{ width: '40px', height: '40px' }} />
                                </Skeleton>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default Storeaction(NameComponent);